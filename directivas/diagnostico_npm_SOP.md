# SOP: Diagnóstico de Error `npm run dev`

## Objetivo
Identificar y solucionar la causa raíz por la cual el comando `npm run dev` falla en el proyecto Insolva_web.

## Entradas
- Archivo `package.json`.
- Estado de la carpeta `node_modules`.
- Salida del comando `npm run dev`.

## Lógica de Diagnóstico
1. **Verificación de Dependencias:** Comprobar si existe la carpeta `node_modules`. Si no existe, la causa es falta de instalación.
2. **Verificación de Scripts:** Asegurarse de que el script `dev` esté correctamente definido en `package.json`.
3. **Ejecución de Prueba:** Ejecutar el comando y capturar el error específico.
4. **Análisis de Error:**
    - Si es `vite: command not found` -> Falta `npm install`.
    - Si es un error de código (JS/React) -> Revisar archivos de configuración o código fuente.
    - Si es un error de puerto -> Verificar procesos ocupando el puerto 5173.

## Trampas Conocidas
- **Falta de `node_modules` (Causa Detectada):** Si el error es `'vite' no se reconoce como un comando`, es porque falta ejecutar `npm install`.
- Versiones de Node.js incompatibles con Vite 5+.
- Archivos `.env` faltantes que causen errores en tiempo de ejecución.

## Resolución (Última Verificación)
1. **Instalación:** Ejecutar `npm install` para recrear `node_modules`.
2. **Ejecución:** Ejecutar `npm run dev` nuevamente.
