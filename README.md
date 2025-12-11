---

# 🧮 Calculadora de Sistemas de Ecuaciones

Este proyecto reúne los distintos métodos de resolución de sistemas de ecuaciones que he aprendido a lo largo de mis estudios, junto con herramientas útiles para facilitar su comprensión y aplicación.

El objetivo es ofrecer una **calculadora educativa intuitiva, visual y adaptable** que no solo resuelva sistemas, sino que también muestre los pasos del proceso y permita elegir entre diferentes métodos y diseños.

---

## 📌 Cómo usarla

Para probar la calculadora, simplemente abre el archivo:

```bash
index.html
```

¡No necesitas servidor ni dependencias adicionales!

---

## 📅 Última actualización: 10 de diciembre de 2025

---

## 🛠️ Estado del proyecto

### ✅ Últimas mejoras

- **Solución con producto cruz**: Se añadió un nuevo método para resolver sistemas usando el producto vectorial.
- **Gráfica 2.5D**: Se implementó una representación visual de los sistemas con una perspectiva que sugiere profundidad, aunque sigue siendo 2D.
- **Cambio de tema mejorado**:
  - Se eliminó el emoji anterior usado para cambiar temas.
  - Se añadió un nuevo botón con animaciones para alternar entre los modos **Día/Noche**.
  - La página ahora **reconoce automáticamente la preferencia de tema del sistema** y aplica el tema correspondiente al cargar.
- **Diseños actualizados**: Se mejoraron los estilos visuales de ambos temas (Día y Noche).

> **¿Por qué "2.5D"?**  
> Porque no es una gráfica completamente 3D. Utilicé perspectiva y transformaciones CSS para dar una sensación de profundidad, pero todo está construido en 2D con código puro (sin librerías externas).

> **¿Por qué no usar librerías como Three.js?**  
> Intenté integrar Three.js para lograr una visualización 3D real, pero no pude incorporarlo de forma funcional dentro del proyecto actual. La gráfica sigue siendo 100% código propio, sin extensiones ni frameworks.

### 🚧 En desarrollo

- **Optimización del código**: Estoy refactorizando el JavaScript para:
  - Generar elementos dinámicamente (como la navegación).
  - Mejorar el rendimiento.
  - Reducir redundancias y mejorar la legibilidad.
- **Bug en el cambio de tema**:  
  Al cargar la página, se observa un breve parpadeo mostrando un tema antes de aplicar el correcto. Esto ocurre porque los estilos se cargan antes de que se detecte la preferencia del usuario o del sistema. ¡Estoy trabajando en solucionarlo!

---

## 📜 Actualizaciones anteriores

- **Calculadora funcional**: ¡Ya puedes resolver sistemas de ecuaciones!
- **Nuevos estilos**: Implementados los temas **Día** y **Noche**, con mejoras continuas en su diseño.
- **Optimización de CSS**: Código reorganizado, limpio y más eficiente.

---

## 📚 Próximos pasos

- **Soporte para distintos tamaños de sistemas**: Validación y resolución para matrices de 2×2, 3×3 y superiores.
- **Documentación de métodos**: Guías detalladas con explicaciones matemáticas para cada método (Cramer, Gauss-Jordan, etc.).
- **Visualización paso a paso**: Mostrar cada operación realizada durante la resolución del sistema.
- **Accesibilidad**: Soporte completo para lectores de pantalla y navegación por teclado.

---

## 🙌 Contribuciones

¡Este es un proyecto en constante evolución!  
Si tienes ideas, sugerencias, descubres un error o quieres colaborar, **¡no dudes en contactarme!**  

Este proyecto es de **código abierto** y cualquier aporte es bienvenido.

---
