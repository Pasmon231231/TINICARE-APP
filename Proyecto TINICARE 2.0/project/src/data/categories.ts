import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'trying_to_conceive',
    title: 'Intentar concebir',
    icon: 'LucideWoman',
    color: '#FFD1DC',
    bgColor: '#FFE6EB',
    description: 'Consejos para concebir',
    content: [
      {
        title: 'Nutrición y suplementos',
        content: `• Comienza a tomar ácido fólico (400 mcg diarios) al menos 3 meses antes de intentar concebir
• Mantén una dieta balanceada rica en frutas, verduras y proteínas magras
• Consulta con tu médico sobre suplementos prenatales adecuados
• Reduce el consumo de cafeína a menos de 200 mg diarios`,
      },
      {
        title: 'Seguimiento de la fertilidad',
        content: `• Aprende a identificar tus días fértiles usando un calendario de ovulación
• Considera usar pruebas de ovulación para mayor precisión
• Registra tu temperatura basal corporal cada mañana
• Observa cambios en el moco cervical para identificar la ovulación`,
      },
      {
        title: 'Estilo de vida saludable',
        content: `• Evita el alcohol, tabaco y drogas recreativas
• Mantén un peso saludable - tanto el sobrepeso como el peso insuficiente pueden afectar la fertilidad
• Practica ejercicio moderado regularmente
• Reduce el estrés con técnicas de relajación como yoga o meditación
• Duerme entre 7-8 horas diarias`,
      },
      {
        title: 'Chequeos médicos recomendados',
        content: `• Agenda una visita preconcepcional con tu ginecólogo
• Actualiza tus vacunas, especialmente la de rubéola
• Revisa cualquier medicamento que estés tomando con tu médico
• Considera realizar pruebas genéticas si hay antecedentes familiares`,
      },
      {
        title: '¿Cuándo buscar ayuda?',
        content: `Si llevas más de 12 meses intentando concebir (o 6 meses si tienes más de 35 años), considera consultar a un especialista en fertilidad. No todas las parejas conciben de inmediato y esto es normal.`,
      }
    ]
  },
  {
    id: 'pregnancy_tracking',
    title: 'Seguir el embarazo',
    icon: 'Baby',
    color: '#B5EAD7',
    bgColor: '#DCEFE8',
    description: 'Guía del embarazo por trimestres',
    content: [
      {
        title: 'Primer trimestre (Semanas 1-12)',
        content: `• Síntomas comunes: náuseas matutinas, fatiga, cambios en los senos, sensibilidad a olores
• Exámenes importantes: primera ecografía, pruebas de sangre iniciales, prueba de detección prenatal
• Nutrición: consumo de ácido fólico 400-600 mcg diarios, evitar alcohol y cafeína excesiva
• Ejercicio: actividad física moderada como caminar o nadar
• Visitas médicas: primera consulta prenatal y establecimiento del calendario de seguimiento`,
      },
      {
        title: 'Segundo trimestre (Semanas 13-27)',
        content: `• Síntomas comunes: aumento de energía, crecimiento visible del vientre, primeros movimientos fetales
• Exámenes importantes: ecografía morfológica (20 semanas), prueba de diabetes gestacional
• Nutrición: aumento de calcio y hierro, consumo adecuado de proteínas
• Ejercicio: mantener actividad moderada, evitando ejercicios de alto impacto
• Preparación: comenzar a planificar la habitación del bebé y considerar clases prenatales`,
      },
      {
        title: 'Tercer trimestre (Semanas 28-40)',
        content: `• Síntomas comunes: dificultad para dormir, acidez, hinchazón, contracciones Braxton-Hicks
• Exámenes importantes: monitoreo del crecimiento fetal, prueba de estreptococo B
• Preparación para el parto: armar el bolso para el hospital, preparar plan de parto
• Señales de alerta: contracciones regulares, pérdida de líquido, sangrado
• Visitas médicas: aumento en la frecuencia de consultas (cada 2 semanas y luego semanales)`,
      },
      {
        title: 'Nutrición durante el embarazo',
        content: `• Incremento calórico recomendado: 340-450 calorías adicionales por día
• Alimentos recomendados: frutas, verduras, proteínas magras, lácteos, granos integrales
• Alimentos a evitar: pescados con alto contenido de mercurio, quesos no pasteurizados, embutidos
• Suplementos: prenatales con hierro, calcio y vitamina D según indicación médica
• Hidratación: consumir al menos 8-10 vasos de agua diarios`,
      },
      {
        title: 'Bienestar emocional',
        content: `• Reconoce los cambios hormonales y emocionales como parte natural del embarazo
• Comparte tus preocupaciones con tu pareja, familia o profesionales de la salud
• Considera unirte a grupos de apoyo para futuras madres
• Practica técnicas de relajación como yoga prenatal o meditación
• Prepárate mentalmente para los cambios que vendrán con la llegada del bebé`,
      }
    ]
  },
  {
    id: 'family_planning',
    title: 'Planificación familiar',
    icon: 'Home',
    color: '#C7CEEA',
    bgColor: '#DDE3F3',
    description: 'Métodos de planificación familiar',
    content: [
      {
        title: 'Métodos hormonales',
        content: `• Píldoras anticonceptivas: eficacia del 91-99% con uso correcto
• Parche transdérmico: se cambia semanalmente, eficacia similar a la píldora
• Anillo vaginal: se usa por 3 semanas consecutivas, seguido por 1 semana de descanso
• Inyectables: aplicación cada 1-3 meses según el tipo
• Implante subdérmico: eficacia superior al 99%, dura hasta 3-5 años`,
      },
      {
        title: 'Métodos de barrera',
        content: `• Preservativo masculino: ofrece protección contra ETS, eficacia del 82-98%
• Preservativo femenino: alternativa controlada por la mujer, eficacia del 79-95%
• Diafragma: se usa con espermicida, eficacia del 88-94%
• Capuchón cervical: similar al diafragma pero más pequeño
• Espermicidas: idealmente usados en combinación con otros métodos`,
      },
      {
        title: 'Dispositivos intrauterinos (DIU)',
        content: `• DIU hormonal: libera progestina localmente, eficacia superior al 99%, dura 3-7 años
• DIU de cobre: no hormonal, eficacia superior al 99%, dura hasta 10-12 años
• Ventajas: método de larga duración, reversible, no requiere recordar su uso diario
• Consideraciones: inserción por profesional médico, posibles efectos secundarios iniciales`,
      },
      {
        title: 'Métodos naturales',
        content: `• Método del calendario: seguimiento del ciclo menstrual
• Temperatura basal corporal: detección de cambios relacionados con la ovulación
• Moco cervical: observación de cambios en la consistencia
• Método sintotérmico: combinación de varios indicadores
• Eficacia variable (76-88%), requiere compromiso y registro cuidadoso`,
      },
      {
        title: 'Anticoncepción de emergencia',
        content: `• Píldora del día después: eficaz hasta 72-120 horas después de la relación sin protección
• DIU de cobre como emergencia: puede insertarse hasta 5 días después
• No es un método regular de anticoncepción
• Consulta médica recomendada después de su uso`,
      }
    ]
  },
  {
    id: 'baby_and_me',
    title: 'Mi bebé y yo',
    icon: 'Baby',
    color: '#E2F0CB',
    bgColor: '#E9F7E3',
    description: 'Cuidados del recién nacido',
    content: [
      {
        title: 'Alimentación',
        content: `• Lactancia materna: recomendada exclusivamente los primeros 6 meses
• Beneficios de la lactancia: fortalece el sistema inmunológico, favorece el vínculo madre-bebé
• Posición correcta: asegurar buen agarre para evitar dolor y favorecer producción
• Frecuencia: alimentación a demanda, aproximadamente cada 2-3 horas
• Alternativas: fórmula infantil si la lactancia no es posible`,
      },
      {
        title: 'Sueño seguro',
        content: `• Posición: siempre boca arriba para dormir
• Cuna: colchón firme, sin almohadas, peluches o protectores
• Ambiente: temperatura moderada (20-22°C), evitar sobrecalentamiento
• Colecho seguro: considerar cuna tipo sidecar junto a la cama
• Patrones de sueño: muy variables en los primeros meses, ciclos de 2-4 horas`,
      },
      {
        title: 'Cuidados diarios',
        content: `• Cambio de pañal: revisar cada 2-3 horas y después de cada alimentación
• Baño: no necesariamente diario, agua tibia y productos suaves
• Cuidado del cordón umbilical: mantener limpio y seco hasta que caiga
• Ropa: capas ligeras según temperatura, evitar sobrecalentar
• Uñas: cortar cuando el bebé esté dormido, usar tijeras de punta redonda`,
      },
      {
        title: 'Desarrollo y estimulación',
        content: `• 0-3 meses: contrastes visuales, sonidos suaves, contacto piel con piel
• 3-6 meses: juguetes de diferentes texturas, tiempo boca abajo supervisado
• Comunicación: hablarle constantemente, responder a sus vocalizaciones
• Masajes: favorecen el desarrollo neuromuscular y refuerzan el vínculo
• Lectura: comenzar desde los primeros meses con libros de alto contraste`,
      }
    ]
  },
  {
    id: 'couple',
    title: 'Mi pareja y yo',
    icon: 'Heart',
    color: '#FFDAC1',
    bgColor: '#FFE8DC',
    description: 'Fortaleciendo la relación de pareja',
    content: [
      {
        title: 'Comunicación efectiva',
        content: `• Establece momentos diarios para conversar sin distracciones
• Practica la escucha activa: atención plena, sin interrupciones
• Expresa sentimientos usando frases con "yo siento" en lugar de acusaciones
• Habla sobre expectativas parentales antes de la llegada del bebé
• Evita guardar resentimientos, aborda los problemas oportunamente`,
      },
      {
        title: 'Intimidad y conexión',
        content: `• Reconoce los cambios físicos y hormonales durante el embarazo y postparto
• Explora diferentes formas de intimidad más allá de lo sexual
• Programa citas regulares como pareja, incluso después del nacimiento
• Expresa aprecio y gratitud específicos diariamente
• Mantén el contacto físico: abrazos, caricias, besos`,
      },
      {
        title: 'División de responsabilidades',
        content: `• Discute y establece expectativas claras sobre tareas domésticas
• Crea un plan para compartir equitativamente el cuidado del bebé
• Reconoce y valora las diferentes formas de contribución
• Mantén flexibilidad para ajustar roles según necesidad
• Considera crear un calendario compartido para organización`,
      },
      {
        title: 'Manejo del estrés',
        content: `• Reconoce señales de estrés en ti mismo y en tu pareja
• Desarrollen estrategias individuales de autocuidado
• Establece una red de apoyo con familiares y amigos
• Considera técnicas como mindfulness o meditación en pareja
• No dudes en buscar ayuda profesional cuando sea necesario`,
      }
    ]
  }
];