# Componentes de Botones

Componentes de botones implementados según el diseño de Figma, utilizando los tokens del sistema de diseño.

## Componentes Disponibles

### 1. Button

Botón principal con variantes Primary, Neutral y Subtle.

```tsx
import { Button } from '@/components';

// Variantes
<Button variant="Primary">Primary Button</Button>
<Button variant="Neutral">Neutral Button</Button>
<Button variant="Subtle">Subtle Button</Button>

// Tamaños
<Button size="Medium">Medium Button</Button>
<Button size="Small">Small Button</Button>

// Estados
<Button state="Default">Default</Button>
<Button state="Hover">Hover</Button>
<Button disabled>Disabled</Button>

// Con iconos
<Button hasIconStart iconStart={<Icon />}>With Start Icon</Button>
<Button hasIconEnd iconEnd={<Icon />}>With End Icon</Button>
```

**Props:**
- `label?: string` - Texto del botón (default: 'Button')
- `variant?: 'Primary' | 'Neutral' | 'Subtle'` - Variante visual
- `state?: 'Default' | 'Hover' | 'Disabled'` - Estado del botón
- `size?: 'Medium' | 'Small'` - Tamaño del botón
- `iconStart?: React.ReactNode` - Icono al inicio
- `iconEnd?: React.ReactNode` - Icono al final
- `hasIconStart?: boolean` - Mostrar icono al inicio
- `hasIconEnd?: boolean` - Mostrar icono al final
- `children?: React.ReactNode` - Contenido alternativo al label

### 2. ButtonDanger

Botón de peligro con variantes Primary y Subtle.

```tsx
import { ButtonDanger } from '@/components';

<ButtonDanger variant="Primary">Delete</ButtonDanger>
<ButtonDanger variant="Subtle">Cancel</ButtonDanger>
```

**Props:** Similar a Button, pero solo soporta variantes `'Primary' | 'Subtle'`

### 3. IconButton

Botón de solo icono.

```tsx
import { IconButton } from '@/components';

<IconButton 
  icon={<StarIcon />} 
  variant="Primary" 
  size="Medium"
  aria-label="Favorite"
/>
```

**Props:**
- `icon?: React.ReactNode` - Icono a mostrar
- `variant?: 'Primary' | 'Neutral' | 'Subtle'` - Variante visual
- `state?: 'Default' | 'Hover' | 'Disabled'` - Estado del botón
- `size?: 'Medium' | 'Small'` - Tamaño (Medium: 44x44px, Small: 36x36px)
- `aria-label?: string` - Etiqueta accesible

### 4. ButtonGroup

Grupo de botones con diferentes alineaciones.

```tsx
import { ButtonGroup } from '@/components';

// Alineación Justify (por defecto)
<ButtonGroup align="Justify" />

// Alineación Start
<ButtonGroup align="Start" />

// Alineación End
<ButtonGroup align="End" />

// Alineación Center
<ButtonGroup align="Center" />

// Alineación Stack (vertical)
<ButtonGroup align="Stack" />

// Con botones personalizados
<ButtonGroup 
  align="Start"
  startButton={<Button variant="Subtle">Cancel</Button>}
  endButton={<Button variant="Primary">Save</Button>}
/>
```

**Props:**
- `buttonStart?: boolean` - Mostrar botón inicial (default: true)
- `buttonEnd?: boolean` - Mostrar botón final (default: true)
- `align?: 'Justify' | 'Start' | 'End' | 'Center' | 'Stack'` - Alineación
- `startButton?: React.ReactNode` - Botón inicial personalizado
- `endButton?: React.ReactNode` - Botón final personalizado

## Tokens Utilizados

Los componentes utilizan los siguientes tokens CSS del sistema de diseño:

### Colores
- `--sds-color-background-brand-default` (#2c2c2c)
- `--sds-color-background-brand-hover` (#1e1e1e)
- `--sds-color-background-danger-default` (#ec221f)
- `--sds-color-background-danger-hover` (#c00f0c)
- `--sds-color-background-neutral-tertiary` (#e3e3e3)
- `--sds-color-background-disabled-default` (#d9d9d9)

### Espaciado
- `--sds-size-space-200` (8px) - Padding Small, Gap
- `--sds-size-space-300` (12px) - Padding Medium
- `--sds-size-space-400` (16px) - Gap entre botones en grupo

### Border Radius
- `--sds-size-radius-200` (8px) - Border radius de botones

### Tipografía
- `--sds-typography-body-font-family` - Fuente del texto
- `--sds-typography-body-size-medium` (16px) - Tamaño de fuente
- `--sds-typography-body-font-weight-regular` (400) - Peso de fuente

## Tamaños

- **Medium**: Altura mínima 40px, padding 12px
- **Small**: Altura mínima 32px, padding 8px
- **IconButton Medium**: 44x44px
- **IconButton Small**: 36x36px

## Estados

Todos los componentes soportan estados automáticos:
- **Default**: Estado normal
- **Hover**: Se activa automáticamente al pasar el mouse (si no está disabled)
- **Disabled**: Se activa cuando `disabled={true}` o `state="Disabled"`

## Ejemplo Completo

```tsx
import { Button, ButtonDanger, IconButton, ButtonGroup } from '@/components';

function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      {/* Button Variants */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button variant="Primary">Primary</Button>
        <Button variant="Neutral">Neutral</Button>
        <Button variant="Subtle">Subtle</Button>
      </div>

      {/* Button Sizes */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Button size="Medium">Medium</Button>
        <Button size="Small">Small</Button>
      </div>

      {/* ButtonDanger */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <ButtonDanger variant="Primary">Delete</ButtonDanger>
        <ButtonDanger variant="Subtle">Cancel</ButtonDanger>
      </div>

      {/* IconButton */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <IconButton icon={<StarIcon />} variant="Primary" aria-label="Favorite" />
        <IconButton icon={<StarIcon />} variant="Neutral" aria-label="Favorite" />
        <IconButton icon={<StarIcon />} variant="Subtle" aria-label="Favorite" />
      </div>

      {/* ButtonGroup */}
      <ButtonGroup align="Justify" />
      <ButtonGroup align="Start" />
      <ButtonGroup align="End" />
      <ButtonGroup align="Center" />
      <ButtonGroup align="Stack" />
    </div>
  );
}
```

