# 🕹️ Gentleman Programming: Landing Page Estilo RPG Retro

¡Bienvenido al **Gran Juego** de la mentoría y la consultoría técnica! Esta landing page convierte la experiencia de buscar mentorías en una aventura épica estilo RPG con estética pixel art y animaciones 16-bit.

## 🎯 Descripción del Proyecto

Una landing page interactiva que presenta los servicios de Gentleman Programming (mentorías, consultorías y charlas) como si fueran **quests** en un videojuego RPG retro. Cada sección representa un "nivel" diferente con mecánicas gamificadas.

### ✨ Características Principales

- **🎮 Experiencia RPG Completa**: Pantalla de inicio, sistema de niveles, logros y progreso
- **🎨 Estética Pixel Art**: CSS puro para crear sprites, iconos y animaciones retro
- **⚡ Arquitectura Moderna**: Astro + Tailwind CSS + TypeScript
- **📱 Responsive Design**: Optimizado para todos los dispositivos
- **🎵 Efectos Visuales**: Animaciones, parallax, partículas y efectos de iluminación
- **♿ Accesibilidad**: ARIA roles, navegación por teclado y modo reducido de movimiento

## 🗺️ Estructura de Niveles

### **Nivel 1: Hero Hub** 
Pantalla principal con menú de opciones estilo RPG y estadísticas del mentor.

### **Nivel 2: Quest de Individuos**
Tablero de habilidades (skill tree) mostrando servicios de mentoría individual.

### **Nivel 3: Quest de Guilds**
Tablón de misiones para empresas con consultorías y workshops.

### **Nivel 4: NPC About**
Dialog box estilo SNES presentando al mentor con avatar animado.

### **Nivel 5: Bestiary de Testimonios**
Carrusel estilo bestiario con testimonios de clientes como "criaturas derrotadas".

### **Nivel 6: Hall of Fame**
Estadísticas animadas y logros del mentor con mosaico de tecnologías.

### **Nivel 7: Final Boss CTA**
Batalla épica donde el usuario debe "derrotar" sus problemas técnicos contactando al mentor.

### **Nivel 8: Temple Footer**
Footer diseñado como un templo pixelado con enlaces y información legal.

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18.0+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/gentleman-astro.git
cd gentleman-astro

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Verificación de tipos
npm run astro check
```

## 🛠️ Stack Tecnológico

- **Framework**: [Astro](https://astro.build/) - Para arquitectura de islas
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **TypeScript**: Para tipado estático
- **Animaciones**: CSS puro con keyframes y transforms
- **Iconografía**: Sprites CSS y arte pixel handcrafted

## 🎨 Sistema de Diseño

### Paleta de Colores RPG
- `pixel-bg`: #0a0a0a (Fondo principal)
- `pixel-cyan`: #00d4aa (Elementos interactivos)
- `pixel-green`: #00ff41 (Éxito/Completado)
- `pixel-purple`: #16213e (Elementos secundarios)
- `gold`: #ffd700 (Elementos premium)
- `hp-red`: #dc2626 (Alertas/Boss)

### Typography
- **Primaria**: Monaco, Menlo, Ubuntu Mono (Monospace pixel-perfect)
- **Tamaños**: Sistema pixel-* (pixel-xs a pixel-3xl)

### Componentes Base
- **Dialog Boxes**: Estilo SNES con bordes pixelados
- **Botones**: Efectos hover con animaciones step-end
- **Barras de Stats**: HP/MP/XP con efectos de brillo
- **Sprites**: Arte pixel creado con CSS gradients

## 🎮 Funcionalidades Interactivas

### Sistema de Juego
- **Save/Load**: Estado guardado en localStorage
- **Progreso**: Tracking de scroll con mini-mapa
- **Logros**: Sistema de achievements dinámicos
- **Easter Eggs**: Código Konami y interacciones ocultas

### Navegación
- **Smooth Scroll**: Entre secciones/niveles
- **Teclado**: Navegación completa sin mouse
- **Mini-mapa**: Indicador visual de progreso
- **Portal de Scroll**: Botón animado para volver arriba

### Efectos Visuales
- **Parallax**: Múltiples capas de fondo
- **Partículas**: Sistemas de energía y elementos flotantes
- **Animaciones**: Sprites animados con CSS
- **Transiciones**: Efectos de entrada por sección

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 480px (Interfaz simplificada)
- **Tablet**: 768px (Grid adaptativo)
- **Desktop**: 1024px+ (Experiencia completa)

### Adaptaciones
- Grid layouts flexibles
- Sprites redimensionables
- Navegación optimizada para touch
- Efectos reducidos en dispositivos móviles

## ♿ Accesibilidad

### Implementaciones
- **ARIA**: Roles y labels en elementos interactivos
- **Keyboard**: Navegación completa por teclado
- **Screen Readers**: Contenido semántico estructurado
- **Motion**: Respeto por `prefers-reduced-motion`
- **Contrast**: Colores que cumplen WCAG AA

### Navegación por Teclado
- `Tab`: Navegación entre elementos
- `Enter/Space`: Activación de botones
- `Arrow Keys`: Navegación en carrusel
- `Escape`: Volver al inicio
- `Konami Code`: Easter egg

## 🎵 Audio y Efectos

### Sistema de Sonido (Simulado)
- Hover effects en menús
- Sonidos de logros
- Efectos de batalla
- Música ambiente (toggle)

*Nota: Los sonidos están simulados con console.log para desarrollo. En producción se implementarían con Web Audio API.*

## 📊 Performance

### Optimizaciones
- **Lazy Loading**: Componentes con Intersection Observer
- **CSS-only**: Animaciones sin JavaScript pesado
- **Image Optimization**: Sprites vectoriales CSS
- **Bundle Splitting**: Arquitectura de islas de Astro

### Métricas Objetivo
- **Lighthouse**: ≥95 Performance Score
- **FCP**: <1.5s First Contentful Paint
- **LCP**: <2.5s Largest Contentful Paint
- **CLS**: <0.1 Cumulative Layout Shift

## 🌐 SEO y Meta Tags

### Implementado
- Open Graph completo
- Twitter Cards
- JSON-LD structured data
- Meta descriptions dinámicas
- URLs canónicas
- Sitemap generado

## 🚢 Deployment

### Vercel (Recomendado)
```bash
# Deploy automático desde GitHub
# Configurar en vercel.com
```

### Netlify
```bash
# Build command: npm run build
# Publish directory: dist
```

### Servidor Estático
```bash
npm run build
# Servir carpeta dist/
```

## 🧪 Testing

### Herramientas Recomendadas
- **Playwright**: Tests E2E de interacciones
- **Storybook**: Documentación de componentes
- **Lighthouse CI**: Auditorías automatizadas
- **axe-core**: Testing de accesibilidad

## 📝 Desarrollo y Contribución

### Estructura de Archivos
```
src/
├── components/          # Componentes de niveles
├── layouts/            # Layout principal
├── pages/              # Páginas de Astro
└── styles/             # CSS global y utilidades

public/
├── favicon.ico         # Favicons
└── og-image.jpg        # Imagen social
```

### Convenciones
- **Naming**: PascalCase para componentes
- **CSS**: Utility-first con Tailwind
- **Commits**: Conventional commits
- **Branches**: feature/nivel-x para nuevos niveles

## 🐛 Debugging

### Console Commands
```javascript
// Mostrar logro manual
window.showAchievement('🐛', 'Debug!', 'Manual achievement');

// Navegar a nivel específico
window.navigateToLevel(3); // Va al nivel 4 (0-indexed)

// Estado del juego actual
console.log('Current level:', currentLevel);
```

### Chrome DevTools
- **Performance**: Analizar animaciones CSS
- **Elements**: Inspeccionar sprites y efectos
- **Console**: Ver eventos de juego simulados
- **Application**: Revisar localStorage saves

## 🔮 Roadmap

### v2024.2 - Próximas Funcionalidades
- [ ] Sistema de audio real con Web Audio API
- [ ] Más easter eggs y mini-juegos
- [ ] Modo oscuro/claro
- [ ] Internacionalización (i18n)
- [ ] PWA con offline support
- [ ] Integración con APIs de scheduling

### v2024.3 - Expansiones
- [ ] Sistema de inventario virtual
- [ ] Chat bot estilo NPC
- [ ] Integración con Discord API
- [ ] Métricas de engagement
- [ ] A/B testing de conversiones

## 📄 Licencia

MIT License - Ver archivo `LICENSE` para detalles.

## 🤝 Contacto

- **Website**: [gentleman-programming.com](https://gentleman-programming.com)
- **YouTube**: [@gentleman-programming](https://youtube.com/@gentleman-programming)
- **Discord**: [Gentleman Programming Guild](https://discord.gg/gentleman-programming)
- **Email**: mentor@gentleman-programming.com

---

*Hecho con ☕, código limpio y cariño a los traumas técnicos.*

**¡Que comience la aventura épica! 🚀**