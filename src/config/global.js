export default {
  global: {
    Name: 'Análisis y mejora del presupuesto personal',
    Description:
      'El análisis y mejora del presupuesto personal permite comprobar los resultados obtenidos, comparar lo planeado con lo ejecutado e interpretar ingresos, gastos, deudas, ahorro y metas financieras. A partir de esta revisión, se identifican desviaciones, causas y oportunidades de ajuste para tomar decisiones responsables, formular acciones de mejora, presentar informes sencillos y realizar seguimiento periódico al manejo de los recursos personales y familiares.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Comprobación del presupuesto personal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de comprobación presupuestal',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia de revisar el presupuesto persona',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Comparación entre presupuesto planeado y presupuesto ejecutado',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Identificación de diferencias, faltantes y excedentes',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Verificación de ingresos, gastos, costos, deudas y ahorro',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Revisión de soportes y registros presupuestales',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo:
              'Coherencia entre necesidades personales y resultados del presupuesto',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Errores frecuentes en la comprobación del presupuesto',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis financiero del presupuesto personal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de análisis financiero persona',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Indicadores de gestión aplicados al presupuesto personal',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Capacidad de ahorro',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Nivel de endeudamiento personal',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Relación entre ingresos y gastos',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Liquidez personal y disponibilidad de recursos',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Cumplimiento de metas financieras',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Interpretación de resultados presupuestales',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis de resultados y toma de decisiones financieras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de análisis de resultados',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas básicas para analizar resultados presupuestales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Identificación de causas de desequilibrio financiero',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Priorización de gastos y obligaciones',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Decisiones sobre reducción de gastos',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Decisiones sobre ahorro, inversión y financiación',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Decisiones frente al manejo de deudas',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo: 'Ajustes al presupuesto según resultados obtenidos',
            hash: 't_3_8',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Acciones de mejora del presupuesto personal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de acción de mejora',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Importancia de las acciones de mejora en el presupuesto personal',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Tipos de acciones de mejora: correctivas, preventivas y de fortalecimiento',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Formulación de acciones de mejora según resultados del presupuesto',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo:
              'Plan de mejora: actividades, responsables, recursos y tiempos',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo:
              'Seguimiento a compromisos financieros personales y familiares',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Indicadores sencillos para medir avances',
            hash: 't_4_7',
          },
          {
            numero: '4.8',
            titulo: 'Ajustes periódicos al plan de mejora',
            hash: 't_4_8',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
