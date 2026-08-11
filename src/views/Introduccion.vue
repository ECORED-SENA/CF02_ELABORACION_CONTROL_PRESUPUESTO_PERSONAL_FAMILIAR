<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-3 El análisis del presupuesto personal permite revisar si la planeación financiera realizada responde a la realidad económica de una persona o núcleo familiar. Esta revisión parte de la comparación entre lo presupuestado y lo ejecutado, con el fin de identificar diferencias en ingresos, gastos, deudas, ahorro, costos y metas financieras. Al comprobar los resultados, es posible reconocer si los recursos fueron suficientes, si se presentaron gastos no previstos, si las obligaciones se cumplieron oportunamente y si las decisiones tomadas favorecieron el equilibrio financiero.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/intro/img1.jpg', alt='').m-auto
              .col-xl.caja-1_p
                p.mb-0 La interpretación de los resultados presupuestales facilita la toma de decisiones responsables frente al uso del dinero. Para ello, se pueden aplicar indicadores sencillos relacionados con capacidad de ahorro, nivel de endeudamiento, relación entre ingresos y gastos, liquidez personal y cumplimiento de metas. Estos elementos permiten valorar si el presupuesto requiere ajustes, si es necesario reducir gastos, reorganizar deudas, fortalecer el ahorro o modificar hábitos de consumo. De esta manera, el análisis financiero personal se convierte en una herramienta práctica para mejorar la administración de los recursos y prevenir desequilibrios económicos. (López, 2016)
          p.mb-0 Las acciones de mejora permiten responder a los hallazgos identificados durante la comprobación y el análisis del presupuesto personal. Su formulación debe ser clara, realista y verificable, de modo que cada ajuste pueda relacionarse con una causa, una actividad, un plazo y un resultado esperado. Además, la presentación de informes sencillos y el seguimiento periódico ayudan a revisar avances, corregir desviaciones y mantener el control sobre las decisiones financieras personales y familiares.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='').m-auto

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
