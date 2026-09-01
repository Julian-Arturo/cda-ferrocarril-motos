# Backups de secciones

## Hero
- `Hero.v1-antes-redisenio.tsx` — versión anterior (plantilla con badge, checks y tarjeta de stats).

### Restaurar
Copia el backup sobre el archivo activo:

```powershell
Copy-Item "src\components\sections\_backups\Hero.v1-antes-redisenio.tsx" "src\components\sections\Hero.tsx" -Force
```

O dime “devuélveme el hero” y lo restauro.
