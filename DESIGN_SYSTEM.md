# Sistema de Diseño - Documentación Completa

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [Sistema de Modos de Color (Temas)](#sistema-de-modos-de-color-temas)
3. [Componentes de Botones](#componentes-de-botones)
   - [Button](#button)
   - [ButtonDanger](#buttondanger)
   - [IconButton](#iconbutton)
   - [ButtonGroup](#buttongroup)
4. [Arquitectura del Sistema](#arquitectura-del-sistema)
5. [Uso y Ejemplos](#uso-y-ejemplos)

---

## Introducción

Este sistema de diseño es una implementación completa de componentes de botones basada en tokens de diseño extraídos de Figma. El sistema está construido con React, TypeScript y utiliza CSS Variables para permitir cambios dinámicos de tema sin recargar la página.

### Características Principales

- ✅ **4 componentes de botones** completamente funcionales
- ✅ **Sistema de modos de color** con 3 temas predefinidos
- ✅ **Soporte completo de TypeScript** con tipos estrictos
- ✅ **Estados interactivos** (Default, Hover, Disabled)
- ✅ **Múltiples variantes** por componente
- ✅ **Tamaños configurables** (Small, Medium)
- ✅ **Persistencia de tema** en localStorage
- ✅ **Transiciones suaves** entre estados y temas

---

## Sistema de Modos de Color (Temas)

**Sí, el cambio de modo es exactamente como un cambio de tema.** El sistema permite cambiar entre diferentes esquemas de color que afectan todos los componentes de manera consistente.

### Modos Disponibles

El sistema incluye **3 modos de color** predefinidos:

1. **SDS Light** (`sds-light`) - Tema claro por defecto
2. **SDS Dark** (`sds-dark`) - Tema oscuro
3. **Brand B Light** (`brand-b-light`) - Tema claro alternativo con paleta de marca

### Cómo Funciona

#### 1. Context API (`ColorModeContext`)

El sistema utiliza React Context para gestionar el estado del modo de color:

```typescript
const { mode, setMode } = useColorMode();
```

- **`mode`**: El modo actual (`'sds-light' | 'sds-dark' | 'brand-b-light'`)
- **`setMode(mode)`**: Función para cambiar el modo

#### 2. Persistencia

El modo seleccionado se guarda automáticamente en `localStorage` con la clave `'color-mode'`, por lo que la preferencia del usuario se mantiene entre sesiones.

#### 3. Aplicación de Estilos

Los estilos se aplican mediante el atributo `data-color-mode` en el elemento `<html>`:

```html
<html data-color-mode="sds-dark"></html>
```

Las variables CSS se definen usando selectores de atributo:

```css
:root[data-color-mode='sds-light'] {
	--sds-color-background-brand-default: #e3e3e3;
	/* ... más variables ... */
}

:root[data-color-mode='sds-dark'] {
	--sds-color-background-brand-default: #4d49fc;
	/* ... más variables ... */
}
```

#### 4. Componente Selector

El componente `ColorModeSelector` proporciona una interfaz visual para cambiar entre modos:

```tsx
<ColorModeSelector />
```

Muestra botones para cada modo disponible y resalta el modo activo usando la variante `Primary`.

### Variables CSS por Modo

Cada modo define sus propias variables para:

- **Colores de marca** (Brand): Fondos, bordes y textos
- **Colores de peligro** (Danger): Para acciones destructivas
- **Colores neutrales** (Neutral): Para acciones secundarias
- **Colores por defecto** (Default): Fondos y textos generales
- **Colores deshabilitados** (Disabled): Estados inactivos
- **Colores de página**: Fondos y textos de la página principal

### Hook Personalizado

Los componentes utilizan el hook `useColorModeAttribute` para detectar cambios en el modo de color y re-renderizarse automáticamente cuando el tema cambia.

---

## Componentes de Botones

### Button

Componente de botón principal con múltiples variantes y estados.

#### Props

```typescript
interface ButtonProps {
	// Contenido
	label?: string; // Texto del botón (default: 'Button')
	children?: React.ReactNode; // Contenido alternativo

	// Iconos
	iconStart?: React.ReactNode; // Icono al inicio
	iconEnd?: React.ReactNode; // Icono al final
	hasIconStart?: boolean; // Flag para mostrar icono inicio
	hasIconEnd?: boolean; // Flag para mostrar icono final

	// Variantes
	variant?: 'Primary' | 'Neutral' | 'Subtle'; // default: 'Primary'
	state?: 'Default' | 'Hover' | 'Disabled'; // default: 'Default'
	size?: 'Medium' | 'Small'; // default: 'Medium'

	// Layout
	fullWidth?: boolean; // Ancho completo (default: false)

	// HTML estándar
	disabled?: boolean; // Deshabilitado nativo
	className?: string;
	style?: React.CSSProperties;
	// ... resto de props HTML estándar
}
```

#### Variantes

1. **Primary** (`variant="Primary"`)

   - Uso: Acciones principales y CTAs
   - Estilo: Fondo de marca, texto blanco, borde de marca
   - Estados:
     - Default: Fondo `--sds-color-background-brand-default`
     - Hover: Fondo `--sds-color-background-brand-hover`
     - Disabled: Fondo y borde deshabilitados

2. **Neutral** (`variant="Neutral"`)

   - Uso: Acciones secundarias
   - Estilo: Fondo neutral, texto oscuro, borde neutral
   - Estados:
     - Default: Fondo `--sds-color-background-neutral-tertiary`
     - Hover: Fondo `--sds-color-background-neutral-tertiary-hover`
     - Disabled: Fondo y borde deshabilitados

3. **Subtle** (`variant="Subtle"`)
   - Uso: Acciones terciarias, menos prominentes
   - Estilo: Sin fondo, solo texto y borde (o sin borde)
   - Estados:
     - Default: Transparente, sin borde, texto neutral
     - Hover: Transparente con borde
     - Disabled: Fondo y borde deshabilitados

#### Tamaños

- **Medium** (default): Padding de 12px
- **Small**: Padding de 8px

#### Estados

Los estados se pueden controlar de dos formas:

1. **Prop `state`**: Control manual del estado visual

   ```tsx
   <Button state='Hover' /> // Muestra estado hover sin interacción
   ```

2. **Interacción automática**: El componente detecta hover automáticamente

   ```tsx
   <Button /> // Cambia a hover al pasar el mouse
   ```

3. **Prop `disabled`**: Deshabilita el botón y muestra estado disabled
   ```tsx
   <Button disabled /> // Equivalente a state="Disabled"
   ```

#### Ejemplos de Uso

```tsx
// Botón básico
<Button>Click me</Button>

// Con variante
<Button variant="Neutral">Cancel</Button>
<Button variant="Subtle">Learn more</Button>

// Con iconos
<Button
  iconStart={<span>★</span>}
  hasIconStart
>
  Favorite
</Button>

<Button
  iconEnd={<span>→</span>}
  hasIconEnd
>
  Next
</Button>

// Con tamaño pequeño
<Button size="Small">Small Button</Button>

// Ancho completo
<Button fullWidth>Full Width</Button>

// Deshabilitado
<Button disabled>Disabled</Button>
```

---

### ButtonDanger

Componente especializado para acciones destructivas o peligrosas. Similar a `Button` pero con paleta de colores rojos.

#### Props

```typescript
interface ButtonDangerProps {
	// Similar a ButtonProps pero solo con variantes:
	variant?: 'Primary' | 'Subtle'; // Solo estas dos variantes
	state?: 'Default' | 'Hover' | 'Disabled';
	size?: 'Medium' | 'Small';

	// Mismas props de contenido e iconos que Button
	label?: string;
	children?: React.ReactNode;
	iconStart?: React.ReactNode;
	iconEnd?: React.ReactNode;
	hasIconStart?: boolean;
	hasIconEnd?: boolean;

	// HTML estándar
	disabled?: boolean;
	className?: string;
	style?: React.CSSProperties;
}
```

#### Variantes

1. **Primary** (`variant="Primary"`)

   - Uso: Acciones destructivas principales (eliminar, borrar)
   - Estilo: Fondo rojo, texto blanco
   - Estados:
     - Default: Fondo `--sds-color-background-danger-default` (#ec221f)
     - Hover: Fondo `--sds-color-background-danger-hover` (#c00f0c)
     - Disabled: Fondo y borde deshabilitados

2. **Subtle** (`variant="Subtle"`)
   - Uso: Acciones destructivas menos prominentes
   - Estilo: Sin fondo, solo texto rojo
   - Estados:
     - Default: Transparente, texto `--sds-color-text-danger-default`
     - Hover: Fondo `--sds-color-background-danger-tertiary-hover`
     - Disabled: Fondo y borde deshabilitados

#### Ejemplos de Uso

```tsx
// Botón de peligro principal
<ButtonDanger variant="Primary">Delete</ButtonDanger>

// Botón de peligro sutil
<ButtonDanger variant="Subtle">Remove</ButtonDanger>

// Con tamaño pequeño
<ButtonDanger size="Small">Delete</ButtonDanger>

// Deshabilitado
<ButtonDanger disabled>Cannot Delete</ButtonDanger>
```

---

### IconButton

Componente de botón que muestra solo un icono, sin texto. Ideal para acciones compactas o barras de herramientas.

#### Props

```typescript
interface IconButtonProps {
	// Icono requerido
	icon?: React.ReactNode; // El icono a mostrar

	// Variantes (igual que Button)
	variant?: 'Primary' | 'Neutral' | 'Subtle';
	state?: 'Default' | 'Hover' | 'Disabled';
	size?: 'Medium' | 'Small';

	// Accesibilidad
	'aria-label': string; // Requerido para accesibilidad

	// HTML estándar
	disabled?: boolean;
	className?: string;
	style?: React.CSSProperties;
}
```

#### Características Especiales

- **Tamaño fijo**: Los botones tienen dimensiones fijas según el tamaño:
  - Medium: 40px × 40px
  - Small: 32px × 32px
- **Forma circular**: Border radius de 32px (completamente redondeado)
- **Solo icono**: No acepta texto, solo el prop `icon`

#### Variantes

Las variantes funcionan igual que en `Button`, pero adaptadas para iconos:

1. **Primary**: Fondo de marca, ideal para acciones principales
2. **Neutral**: Fondo neutral, para acciones secundarias
3. **Subtle**: Transparente, para acciones terciarias

#### Ejemplos de Uso

```tsx
// Botón de icono básico
<IconButton
  icon={<span style={{ fontSize: '20px' }}>★</span>}
  aria-label="Favorite"
/>

// Con variante
<IconButton
  variant="Neutral"
  icon={<span>⚙️</span>}
  aria-label="Settings"
/>

// Tamaño pequeño
<IconButton
  size="Small"
  icon={<span>✕</span>}
  aria-label="Close"
/>

// Deshabilitado
<IconButton
  disabled
  icon={<span>🔒</span>}
  aria-label="Locked"
/>
```

---

### ButtonGroup

Componente contenedor para agrupar dos botones con diferentes alineaciones. Útil para formularios, modales o acciones relacionadas.

#### Props

```typescript
interface ButtonGroupProps {
	// Visibilidad de botones
	buttonStart?: boolean; // Mostrar botón inicio (default: true)
	buttonEnd?: boolean; // Mostrar botón final (default: true)

	// Alineación
	align?: 'Justify' | 'Start' | 'End' | 'Center' | 'Stack';
	// default: 'Justify'

	// Botones personalizados
	startButton?: React.ReactNode; // Botón inicio personalizado
	endButton?: React.ReactNode; // Botón final personalizado

	// Estilos
	className?: string;
	style?: React.CSSProperties;
}
```

#### Alineaciones

1. **Justify** (default)

   - Los botones ocupan todo el ancho disponible
   - Cada botón toma el 50% del espacio
   - Útil para acciones principales en formularios

2. **Start**

   - Botones alineados a la izquierda
   - Ancho natural de los botones

3. **End**

   - Botones alineados a la derecha
   - Ancho natural de los botones

4. **Center**

   - Botones centrados
   - Ancho natural de los botones

5. **Stack**
   - Botones apilados verticalmente
   - Cada botón ocupa el 100% del ancho
   - Útil para móviles o espacios estrechos

#### Botones por Defecto

Si no se proporcionan botones personalizados, el componente usa:

- **Start Button**: `<Button variant="Subtle">Button</Button>`
- **End Button**: `<Button variant="Primary">Button</Button>`

#### Ejemplos de Uso

```tsx
// Grupo básico con botones por defecto
<ButtonGroup />

// Con alineación personalizada
<ButtonGroup align="Start" />
<ButtonGroup align="End" />
<ButtonGroup align="Center" />
<ButtonGroup align="Stack" />

// Con botones personalizados
<ButtonGroup
  align="Start"
  startButton={<Button variant="Subtle">Cancel</Button>}
  endButton={<Button variant="Primary">Save</Button>}
/>

// Stack con botones de ancho completo
<ButtonGroup
  align="Stack"
  startButton={<Button variant="Subtle" fullWidth>Cancel</Button>}
  endButton={<Button variant="Primary" fullWidth>Save</Button>}
/>

// Solo mostrar un botón
<ButtonGroup
  buttonStart={false}
  endButton={<Button variant="Primary">Continue</Button>}
/>
```

---

## Arquitectura del Sistema

### Estructura de Archivos

```
app/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── index.ts
│   ├── ButtonDanger/
│   │   ├── ButtonDanger.tsx
│   │   └── index.ts
│   ├── IconButton/
│   │   ├── IconButton.tsx
│   │   └── index.ts
│   ├── ButtonGroup/
│   │   ├── ButtonGroup.tsx
│   │   └── index.ts
│   ├── ColorModeSelector/
│   │   ├── ColorModeSelector.tsx
│   │   └── index.ts
│   └── index.ts
├── contexts/
│   └── ColorModeContext.tsx
├── hooks/
│   └── useColorModeAttribute.ts
├── styles/
│   └── tokens.ts
├── globals.css
├── layout.tsx
└── page.tsx
```

### Flujo de Datos

1. **Inicialización**:

   - `layout.tsx` incluye un script inline que lee `localStorage` y aplica el modo antes de la hidratación
   - `ColorModeProvider` envuelve la aplicación y gestiona el estado

2. **Cambio de Modo**:

   - Usuario hace clic en `ColorModeSelector`
   - Se llama a `setMode(newMode)`
   - Se actualiza el atributo `data-color-mode` en `<html>`
   - Se guarda en `localStorage`
   - Los componentes detectan el cambio mediante `useColorModeAttribute`
   - Las variables CSS se actualizan automáticamente

3. **Renderizado de Componentes**:
   - Cada componente lee las variables CSS según su variante y estado
   - Los estilos se calculan dinámicamente en función del modo actual
   - Las transiciones CSS proporcionan cambios suaves

### Variables CSS

El sistema utiliza variables CSS con el prefijo `--sds-` (Simple Design System):

- **Colores**: `--sds-color-{category}-{property}`
- **Espaciado**: `--sds-size-space-{scale}`
- **Bordes**: `--sds-size-radius-{scale}`, `--sds-size-stroke-border`
- **Tipografía**: `--sds-typography-{property}`

Ejemplos:

- `--sds-color-background-brand-default`
- `--sds-size-space-300` (12px)
- `--sds-typography-body-font-family`

### Hooks Personalizados

#### `useColorMode()`

Hook para acceder al contexto de modo de color:

```typescript
const { mode, setMode } = useColorMode();
```

#### `useColorModeAttribute()`

Hook que escucha cambios en el atributo `data-color-mode` y fuerza re-renderizado:

```typescript
const colorMode = useColorModeAttribute();
```

Usado internamente por los componentes para detectar cambios de tema.

---

## Uso y Ejemplos

### Configuración Básica

1. **Envolver la aplicación con el Provider**:

```tsx
// layout.tsx
import { ColorModeProvider } from './contexts/ColorModeContext';

export default function RootLayout({ children }) {
	return (
		<html>
			<body>
				<ColorModeProvider>{children}</ColorModeProvider>
			</body>
		</html>
	);
}
```

2. **Usar el selector de modo**:

```tsx
import { ColorModeSelector } from './components/ColorModeSelector';

export default function Page() {
	return (
		<div>
			<ColorModeSelector />
			{/* Resto del contenido */}
		</div>
	);
}
```

### Ejemplos Completos

#### Formulario con Botones

```tsx
import { Button, ButtonGroup } from './components';

export function Form() {
	return (
		<form>
			{/* Campos del formulario */}

			<ButtonGroup
				align='Justify'
				startButton={<Button variant='Subtle'>Cancel</Button>}
				endButton={<Button variant='Primary'>Submit</Button>}
			/>
		</form>
	);
}
```

#### Barra de Acciones

```tsx
import { Button, ButtonDanger, IconButton } from './components';

export function ActionBar() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <IconButton
        icon={<span>←</span>}
        variant="Subtle"
        aria-label="Back"
      />
      <Button variant="Primary">Save</Button>
      <ButtonDanger variant="Subtle">Delete</Button>
    </div>
  );
}
```

#### Lista de Items con Acciones

```tsx
import { Button, IconButton } from './components';

export function ItemList({ items }) {
	return (
		<ul>
			{items.map(item => (
				<li
					key={item.id}
					style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
				>
					<span>{item.name}</span>
					<IconButton
						icon={<span>★</span>}
						variant='Subtle'
						aria-label={`Favorite ${item.name}`}
					/>
					<Button size='Small' variant='Neutral'>
						Edit
					</Button>
				</li>
			))}
		</ul>
	);
}
```

### Mejores Prácticas

1. **Accesibilidad**:

   - Siempre proporciona `aria-label` en `IconButton`
   - Usa `disabled` en lugar de solo `state="Disabled"` para deshabilitar funcionalidad
   - Mantén contraste adecuado según el modo de color

2. **Rendimiento**:

   - Los componentes ya están optimizados con `React.forwardRef`
   - Las transiciones CSS son más eficientes que animaciones JavaScript

3. **Consistencia**:

   - Usa `Primary` para acciones principales
   - Usa `Neutral` para acciones secundarias
   - Usa `Subtle` para acciones terciarias
   - Usa `ButtonDanger` solo para acciones destructivas

4. **Responsive**:
   - Usa `ButtonGroup` con `align="Stack"` en móviles
   - Considera `fullWidth` en botones dentro de contenedores estrechos

---

## Conclusión

Este sistema de diseño proporciona una base sólida y extensible para construir interfaces consistentes. Los componentes están completamente tipados, son accesibles y se adaptan automáticamente a los cambios de tema.

Para más información sobre tokens específicos o personalización, consulta:

- `app/styles/tokens.ts` - Definición de tokens
- `app/globals.css` - Variables CSS y modos de color
- `app/components/` - Implementación de componentes
