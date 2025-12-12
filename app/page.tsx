'use client';

import { Button, ButtonDanger, IconButton, ButtonGroup } from './components';
import { ColorModeSelector } from './components/ColorModeSelector';

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'var(--sds-color-page-background)', 
      padding: '2rem',
      fontFamily: 'var(--font-family-sans)',
      transition: 'background-color 0.2s ease-in-out'
    }}>
      <main style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem'
      }}>
        {/* Header */}
        <header style={{ textAlign: 'center', paddingBottom: '2rem' }}>
          <h1 style={{ 
            fontSize: '3rem',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--sds-color-page-text-primary)',
            marginBottom: '1rem',
            lineHeight: '1.2',
            letterSpacing: 'var(--letter-spacing-tight)',
            transition: 'color 0.2s ease-in-out'
          }}>
            Design System - Button Components
          </h1>
          <p style={{ 
            fontSize: 'var(--font-size-lg)', 
            color: 'var(--sds-color-page-text-secondary)',
            transition: 'color 0.2s ease-in-out'
          }}>
            Demostración de todos los componentes de botones con sus variantes y estados
          </p>
          <ColorModeSelector />
        </header>

        {/* Button Component */}
        <section>
          <h2 style={{ 
            fontSize: 'var(--font-size-3xl)', 
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: '1.5rem',
            color: 'var(--sds-color-page-text-primary)'
          }}>
            Button Component
          </h2>
          
          {/* Variants */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: '1rem',
              color: 'var(--sds-color-page-text-primary)'
            }}>
              Variantes (Medium Size)
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <Button variant="Primary" size="Medium">Primary</Button>
              <Button variant="Neutral" size="Medium">Neutral</Button>
              <Button variant="Subtle" size="Medium">Subtle</Button>
            </div>
          </div>

          {/* States */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: '1rem',
              color: 'var(--sds-color-page-text-primary)'
            }}>
              Estados - Primary Variant
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <Button variant="Primary" state="Default" size="Medium">Default</Button>
              <Button variant="Primary" state="Hover" size="Medium">Hover</Button>
              <Button variant="Primary" state="Disabled" size="Medium">Disabled</Button>
              <Button variant="Primary" disabled size="Medium">Disabled (prop)</Button>
            </div>
          </div>

          {/* Sizes */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: '1rem',
              color: 'var(--sds-color-page-text-primary)'
            }}>
              Tamaños - Primary Variant
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <Button variant="Primary" size="Medium">Medium</Button>
              <Button variant="Primary" size="Small">Small</Button>
            </div>
          </div>

          {/* All Variants with All States */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: '1rem',
              color: 'var(--sds-color-page-text-primary)'
            }}>
              Todas las Variantes - Todos los Estados
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <p style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-sm)', color: 'var(--sds-color-page-text-secondary)', transition: 'color 0.2s ease-in-out' }}>
                  Primary Variant
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                  <Button variant="Primary" state="Default">Default</Button>
                  <Button variant="Primary" state="Hover">Hover</Button>
                  <Button variant="Primary" state="Disabled">Disabled</Button>
                </div>
              </div>
              <div>
                <p style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-sm)', color: 'var(--sds-color-page-text-secondary)', transition: 'color 0.2s ease-in-out' }}>
                  Neutral Variant
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                  <Button variant="Neutral" state="Default">Default</Button>
                  <Button variant="Neutral" state="Hover">Hover</Button>
                  <Button variant="Neutral" state="Disabled">Disabled</Button>
                </div>
              </div>
              <div>
                <p style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-sm)', color: 'var(--sds-color-page-text-secondary)', transition: 'color 0.2s ease-in-out' }}>
                  Subtle Variant
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                  <Button variant="Subtle" state="Default">Default</Button>
                  <Button variant="Subtle" state="Hover">Hover</Button>
                  <Button variant="Subtle" state="Disabled">Disabled</Button>
                </div>
              </div>
            </div>
          </div>

          {/* With Icons */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: '1rem',
              color: 'var(--sds-color-page-text-primary)'
            }}>
              Con Iconos
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <Button variant="Primary" hasIconStart iconStart={<span>★</span>}>
                Start Icon
              </Button>
              <Button variant="Primary" hasIconEnd iconEnd={<span>→</span>}>
                End Icon
              </Button>
              <Button variant="Primary" hasIconStart hasIconEnd iconStart={<span>←</span>} iconEnd={<span>→</span>}>
                Both Icons
              </Button>
            </div>
          </div>
        </section>

        {/* ButtonDanger Component */}
        <section>
          <h2 style={{ 
            fontSize: 'var(--font-size-3xl)', 
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: '1.5rem',
            color: 'var(--sds-color-page-text-primary)'
          }}>
            ButtonDanger Component
          </h2>
          
          {/* Variants */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: '1rem',
              color: 'var(--sds-color-page-text-primary)'
            }}>
              Variantes (Medium Size)
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <ButtonDanger variant="Primary" size="Medium">Primary Danger</ButtonDanger>
              <ButtonDanger variant="Subtle" size="Medium">Subtle Danger</ButtonDanger>
            </div>
          </div>

          {/* All States */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: '1rem',
              color: 'var(--sds-color-page-text-primary)'
            }}>
              Todos los Estados - Primary Variant
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <ButtonDanger variant="Primary" state="Default">Default</ButtonDanger>
              <ButtonDanger variant="Primary" state="Hover">Hover</ButtonDanger>
              <ButtonDanger variant="Primary" state="Disabled">Disabled</ButtonDanger>
            </div>
          </div>

          {/* All Variants with All States */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: '1rem',
              color: 'var(--sds-color-page-text-primary)'
            }}>
              Todas las Variantes - Todos los Estados
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <p style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-sm)', color: 'var(--sds-color-page-text-secondary)', transition: 'color 0.2s ease-in-out' }}>
                  Primary Variant
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                  <ButtonDanger variant="Primary" state="Default" size="Medium">Default</ButtonDanger>
                  <ButtonDanger variant="Primary" state="Hover" size="Medium">Hover</ButtonDanger>
                  <ButtonDanger variant="Primary" state="Disabled" size="Medium">Disabled</ButtonDanger>
                  <ButtonDanger variant="Primary" state="Default" size="Small">Small</ButtonDanger>
                </div>
              </div>
              <div>
                <p style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-sm)', color: 'var(--sds-color-page-text-secondary)', transition: 'color 0.2s ease-in-out' }}>
                  Subtle Variant
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                  <ButtonDanger variant="Subtle" state="Default" size="Medium">Default</ButtonDanger>
                  <ButtonDanger variant="Subtle" state="Hover" size="Medium">Hover</ButtonDanger>
                  <ButtonDanger variant="Subtle" state="Disabled" size="Medium">Disabled</ButtonDanger>
                  <ButtonDanger variant="Subtle" state="Default" size="Small">Small</ButtonDanger>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IconButton Component */}
        <section>
          <h2 style={{ 
            fontSize: 'var(--font-size-3xl)', 
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: '1.5rem',
            color: 'var(--sds-color-page-text-primary)'
          }}>
            IconButton Component
          </h2>
          
          {/* Variants */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: '1rem',
              color: 'var(--sds-color-page-text-primary)'
            }}>
              Variantes (Medium Size)
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <IconButton variant="Primary" size="Medium" icon={<span style={{ fontSize: '20px' }}>★</span>} aria-label="Favorite Primary" />
              <IconButton variant="Neutral" size="Medium" icon={<span style={{ fontSize: '20px' }}>★</span>} aria-label="Favorite Neutral" />
              <IconButton variant="Subtle" size="Medium" icon={<span style={{ fontSize: '20px' }}>★</span>} aria-label="Favorite Subtle" />
            </div>
          </div>

          {/* All States */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: '1rem',
              color: 'var(--sds-color-page-text-primary)'
            }}>
              Todos los Estados - Primary Variant
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <IconButton variant="Primary" state="Default" size="Medium" icon={<span style={{ fontSize: '20px' }}>★</span>} aria-label="Default" />
              <IconButton variant="Primary" state="Hover" size="Medium" icon={<span style={{ fontSize: '20px' }}>★</span>} aria-label="Hover" />
              <IconButton variant="Primary" state="Disabled" size="Medium" icon={<span style={{ fontSize: '20px' }}>★</span>} aria-label="Disabled" />
            </div>
          </div>

          {/* All Variants with All States */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: '1rem',
              color: 'var(--sds-color-page-text-primary)'
            }}>
              Todas las Variantes - Todos los Estados
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <p style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-sm)', color: 'var(--sds-color-page-text-secondary)', transition: 'color 0.2s ease-in-out' }}>
                  Primary Variant
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                  <IconButton variant="Primary" state="Default" size="Medium" icon={<span style={{ fontSize: '20px' }}>★</span>} aria-label="Default" />
                  <IconButton variant="Primary" state="Hover" size="Medium" icon={<span style={{ fontSize: '20px' }}>★</span>} aria-label="Hover" />
                  <IconButton variant="Primary" state="Disabled" size="Medium" icon={<span style={{ fontSize: '20px' }}>★</span>} aria-label="Disabled" />
                  <IconButton variant="Primary" state="Default" size="Small" icon={<span style={{ fontSize: '16px' }}>★</span>} aria-label="Small" />
                </div>
              </div>
              <div>
                <p style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-sm)', color: 'var(--sds-color-page-text-secondary)', transition: 'color 0.2s ease-in-out' }}>
                  Neutral Variant
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                  <IconButton variant="Neutral" state="Default" size="Medium" icon={<span style={{ fontSize: '20px' }}>★</span>} aria-label="Default" />
                  <IconButton variant="Neutral" state="Hover" size="Medium" icon={<span style={{ fontSize: '20px' }}>★</span>} aria-label="Hover" />
                  <IconButton variant="Neutral" state="Disabled" size="Medium" icon={<span style={{ fontSize: '20px' }}>★</span>} aria-label="Disabled" />
                  <IconButton variant="Neutral" state="Default" size="Small" icon={<span style={{ fontSize: '16px' }}>★</span>} aria-label="Small" />
                </div>
              </div>
              <div>
                <p style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-sm)', color: 'var(--sds-color-page-text-secondary)', transition: 'color 0.2s ease-in-out' }}>
                  Subtle Variant
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                  <IconButton variant="Subtle" state="Default" size="Medium" icon={<span style={{ fontSize: '20px' }}>★</span>} aria-label="Default" />
                  <IconButton variant="Subtle" state="Hover" size="Medium" icon={<span style={{ fontSize: '20px' }}>★</span>} aria-label="Hover" />
                  <IconButton variant="Subtle" state="Disabled" size="Medium" icon={<span style={{ fontSize: '20px' }}>★</span>} aria-label="Disabled" />
                  <IconButton variant="Subtle" state="Default" size="Small" icon={<span style={{ fontSize: '16px' }}>★</span>} aria-label="Small" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ButtonGroup Component */}
        <section>
          <h2 style={{ 
            fontSize: 'var(--font-size-3xl)', 
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: '1.5rem',
            color: 'var(--sds-color-page-text-primary)'
          }}>
            ButtonGroup Component
          </h2>
          
          {/* All Alignments */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: '1rem',
              color: 'var(--sds-color-page-text-primary)'
            }}>
              Todas las Alineaciones
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <p style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-sm)', color: 'var(--sds-color-page-text-secondary)', transition: 'color 0.2s ease-in-out' }}>
                  Justify (por defecto)
                </p>
                <ButtonGroup align="Justify" />
              </div>
              <div>
                <p style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-sm)', color: 'var(--sds-color-page-text-secondary)', transition: 'color 0.2s ease-in-out' }}>
                  Start
                </p>
                <ButtonGroup align="Start" />
              </div>
              <div>
                <p style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-sm)', color: 'var(--sds-color-page-text-secondary)', transition: 'color 0.2s ease-in-out' }}>
                  End
                </p>
                <ButtonGroup align="End" />
              </div>
              <div>
                <p style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-sm)', color: 'var(--sds-color-page-text-secondary)', transition: 'color 0.2s ease-in-out' }}>
                  Center
                </p>
                <ButtonGroup align="Center" />
              </div>
              <div>
                <p style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-sm)', color: 'var(--sds-color-page-text-secondary)', transition: 'color 0.2s ease-in-out' }}>
                  Stack (vertical)
                </p>
                <ButtonGroup align="Stack" />
              </div>
            </div>
          </div>

          {/* Custom Buttons */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: '1rem',
              color: 'var(--sds-color-page-text-primary)'
            }}>
              Con Botones Personalizados
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <p style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-sm)', color: 'var(--sds-color-page-text-secondary)', transition: 'color 0.2s ease-in-out' }}>
                  Custom Buttons - Start Alignment
                </p>
                <ButtonGroup 
                  align="Start"
                  startButton={<Button variant="Subtle">Cancel</Button>}
                  endButton={<Button variant="Primary">Save</Button>}
                />
              </div>
              <div>
                <p style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-sm)', color: 'var(--sds-color-page-text-secondary)', transition: 'color 0.2s ease-in-out' }}>
                  Custom Buttons - Stack Alignment
                </p>
                <ButtonGroup 
                  align="Stack"
                  startButton={<Button variant="Subtle" fullWidth>Cancel</Button>}
                  endButton={<Button variant="Primary" fullWidth>Save</Button>}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Examples */}
        <section>
          <h2 style={{ 
            fontSize: 'var(--font-size-3xl)', 
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: '1.5rem',
            color: 'var(--sds-color-page-text-primary)'
          }}>
            Ejemplos Interactivos
          </h2>
          
          <div style={{ 
            padding: '2rem', 
            backgroundColor: 'var(--sds-color-background-default-secondary)', 
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--sds-color-border-default-default)',
            transition: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out'
          }}>
            <p style={{ marginBottom: '1.5rem', fontSize: 'var(--font-size-base)', color: 'var(--sds-color-page-text-secondary)', transition: 'color 0.2s ease-in-out' }}>
              Estos botones son interactivos - pasa el mouse sobre ellos para ver el estado hover:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <Button variant="Primary">Primary Button</Button>
              <Button variant="Neutral">Neutral Button</Button>
              <Button variant="Subtle">Subtle Button</Button>
              <ButtonDanger variant="Primary">Danger Button</ButtonDanger>
              <ButtonDanger variant="Subtle">Danger Subtle</ButtonDanger>
              <IconButton variant="Primary" icon={<span style={{ fontSize: '20px' }}>★</span>} aria-label="Favorite" />
              <IconButton variant="Neutral" icon={<span style={{ fontSize: '20px' }}>★</span>} aria-label="Favorite" />
              <IconButton variant="Subtle" icon={<span style={{ fontSize: '20px' }}>★</span>} aria-label="Favorite" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
