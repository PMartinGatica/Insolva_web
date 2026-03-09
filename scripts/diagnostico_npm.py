import os
import subprocess
import shutil

def run_diagnostics():
    print("--- Iniciando Diagnóstico de Entorno ---")
    
    # 1. Verificar node_modules
    project_path = os.getcwd()
    node_modules_path = os.path.join(project_path, "node_modules")
    
    if not os.path.exists(node_modules_path):
        print("[!] ERROR: No se encontró la carpeta 'node_modules'.")
        print("[?] Sugerencia: Es necesario ejecutar 'npm install'.")
    else:
        print("[OK] 'node_modules' está presente.")

    # 2. Verificar package.json
    if os.path.exists("package.json"):
        print("[OK] 'package.json' encontrado.")
    else:
        print("[!] ERROR: No se encontró 'package.json' en la raíz.")
        return

    # 3. Intentar ejecutar npm run dev y capturar error
    print("--- Intentando ejecutar 'npm run dev' ---")
    try:
        # Usamos shell=True para Windows y capturamos stderr
        process = subprocess.Popen(
            ["npm", "run", "dev"], 
            stdout=subprocess.PIPE, 
            stderr=subprocess.PIPE, 
            text=True,
            shell=True
        )
        
        # Esperamos un poco para capturar el error inicial si lo hay
        try:
            stdout, stderr = process.communicate(timeout=5)
        except subprocess.TimeoutExpired:
            process.kill()
            stdout, stderr = process.communicate()
            
        if stderr:
            print("[!] Captura de Error:")
            print(stderr)
        else:
            print("[OK] El proceso parece haber iniciado (o no devolvió error inmediato en 5s).")
            print(stdout)
            
    except Exception as e:
        print(f"[!] Error al intentar ejecutar el comando: {e}")

if __name__ == "__main__":
    run_diagnostics()
