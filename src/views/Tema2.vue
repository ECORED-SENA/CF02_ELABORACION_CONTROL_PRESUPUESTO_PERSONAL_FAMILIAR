<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Análisis financiero del presupuesto personal
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajustes-3(data-aos="fade-right")
            p.mb-0 El análisis financiero del presupuesto personal permite interpretar los resultados obtenidos después de comparar lo planeado con lo ejecutado. No se trata únicamente de revisar cifras, sino de comprender qué significan para la economía personal o familiar. Por ejemplo, un presupuesto puede indicar que los ingresos fueron suficientes, pero también evidenciar que las deudas ocupan una parte importante del dinero disponible, que la meta de ahorro no se está cumpliendo o que los gastos variables aumentan cada mes.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img1.jpg', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 Para realizar este análisis pueden utilizarse indicadores sencillos que permitan evaluar la capacidad de ahorro, el nivel de endeudamiento, la relación entre ingresos y gastos, la liquidez personal y el cumplimiento de las metas financieras. Estos indicadores no requieren cálculos complejos, pero sí información organizada y confiable. Su aplicación facilita la toma de decisiones, como reducir gastos, evitar nuevas deudas, fortalecer el ahorro o ajustar las metas según la capacidad económica (López, 2016).
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Concepto de análisis financiero personal
      p El análisis financiero personal consiste en revisar de forma organizada los ingresos, los gastos, las deudas, el ahorro, los costos, las metas financieras y el saldo disponible para comprender cómo se administran los recursos. A diferencia del simple registro de valores, este análisis permite interpretar los resultados y establecer si las decisiones tomadas durante un periodo favorecen o afectan la estabilidad económica de la persona o de su núcleo familiar.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img2.png', alt='').m-auto
        .col-xl 
          .row.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img5.svg', alt='').m-auto
            .col-xl
              p.mb-0 En la práctica, analizar las finanzas personales implica responder preguntas como: ¿los ingresos alcanzan para cubrir los gastos?, ¿las deudas están dentro de la capacidad de pago?, ¿se está logrando ahorrar?, ¿los gastos variables están aumentando?, ¿el saldo disponible es suficiente?, ¿las metas financieras avanzan? Estas preguntas permiten pasar del registro de información a la toma de decisiones.
          p.mb-0 Por ejemplo, si una persona recibe $1.800.000 mensuales y sus gastos, deudas y costos suman $1.750.000, puede pensar que no enfrenta dificultades porque aún dispone de $50.000. Sin embargo, el análisis permite identificar que ese margen es reducido y que cualquier imprevisto podría afectar su estabilidad financiera. Por ello, el análisis financiero personal facilita anticipar riesgos y definir ajustes antes de que se presenten dificultades mayores. 
      p.mb-5 Los principales aspectos que se analizan en las finanzas personales se presentan a continuación.
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-0
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img3.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img4.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Ingresos
                  p #[b Pregunta orientadora:] ¿Los ingresos fueron suficientes durante el periodo?
                  p.mb-0 #[b Utilidad del análisis:] permite determinar si los recursos cubren las necesidades y las obligaciones.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img5.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Gastos
                  p #[b Pregunta orientadora:] ¿Los gastos se mantuvieron dentro de lo planeado?
                  p.mb-0 #[b Utilidad del análisis:] ayuda a identificar excesos o consumos que deben ajustarse.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img6.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Deudas
                  p #[b Pregunta orientadora:] ¿Las cuotas afectan demasiado el dinero disponible?
                  p.mb-0 #[b Utilidad del análisis:] permite revisar la capacidad de pago y evitar el sobreendeudamiento.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img7.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Ahorro
                  p #[b Pregunta orientadora:] ¿Se logró separar dinero para una meta o una emergencia?
                  p.mb-0 #[b Utilidad del análisis:] ayuda a medir el avance hacia la estabilidad financiera.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Costos
                  p #[b Pregunta orientadora:] ¿Se descontaron los costos de una actividad independiente?
                  p.mb-0 #[b Utilidad del análisis:] evita confundir los ingresos con el dinero realmente disponible.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img9.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Saldo disponible
                  p #[b Pregunta orientadora:] ¿El dinero restante fue suficiente al finalizar el periodo?
                  p.mb-0 #[b Utilidad del análisis:] permite determinar si existe margen para afrontar imprevistos o tomar nuevas decisiones.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img10.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Metas financieras
                  p #[b Pregunta orientadora:] ¿Se avanzó en los objetivos propuestos?
                  p.mb-0 #[b Utilidad del análisis:] ayuda a revisar si las metas son realistas y alcanzables.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2  Indicadores de gestión aplicados al presupuesto personal
      p Los indicadores de gestión aplicados al presupuesto personal son medidas sencillas que permiten evaluar cómo se administran los recursos durante un periodo determinado. Su función es facilitar la interpretación de los resultados del presupuesto, no solo a partir del valor total de los ingresos o los gastos, sino también de la relación entre los diferentes datos registrados. Por ejemplo, no basta con conocer cuánto se recibió durante el mes; también es necesario identificar qué parte del ingreso se destinó a gastos, deudas, ahorro o metas financieras.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t2/img11.jpg', alt='').m-auto
              .col-xl.caja-1_p
                p.mb-0 En la práctica, estos indicadores permiten responder preguntas como: ¿qué porcentaje del ingreso se destina a los gastos?, ¿cuánto se utiliza para el pago de deudas?, ¿existe capacidad de ahorro?, ¿el saldo disponible permite atender imprevistos?, ¿las metas financieras presentan avances? Con esta información es posible determinar si el presupuesto está equilibrado o si requiere ajustes en el consumo, el endeudamiento, el ahorro o la planeación financiera.
          p.mb-0 Los indicadores constituyen herramientas de apoyo para la toma de decisiones. Por ejemplo, si una persona identifica que el pago de las deudas representa una parte importante de sus ingresos, puede evitar asumir nuevas obligaciones y priorizar el pago de las existentes. Si identifica que no está logrando ahorrar, puede revisar los gastos variables o ajustar sus metas financieras. De esta manera, los indicadores permiten transformar la información del presupuesto en acciones de mejora (López, 2016). Algunos indicadores sencillos que pueden aplicarse al presupuesto personal para analizar los ingresos, los gastos, las deudas, el ahorro y las metas financieras son los siguientes:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img12.png', alt='').m-auto
      .bg-1
        .px-5
          .row.justify-content-center.mb-0
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 2.
                span Indicadores de gestión aplicados al presupuesto personal
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Indicador
                      th.ajuste-border-tabla.texto-left ¿Qué mide?
                      th.ajuste-border-tabla.texto-left Fórmula básica
                      th.texto-left Interpretación práctica
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Porcentaje de gastos
                      td.ajuste-border-tabla.texto-left La parte del ingreso que se destina a gastos.
                      td.ajuste-border-tabla.texto-left Gastos totales / Ingresos totales × 100
                      td.texto-left Permite determinar cuánto del ingreso se consume durante el periodo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Nivel de endeudamiento
                      td.ajuste-border-tabla.texto-left La parte del ingreso comprometida en el pago de deudas.
                      td.ajuste-border-tabla.texto-left Cuotas de deuda / Ingresos totales × 100
                      td.texto-left Ayuda a identificar si las deudas afectan la capacidad de pago.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Capacidad de ahorro
                      td.ajuste-border-tabla.texto-left La parte del ingreso que puede reservarse.
                      td.ajuste-border-tabla.texto-left Ahorro / Ingresos totales × 100
                      td.texto-left Permite revisar si la persona está avanzando en sus metas financieras o en la prevención de imprevistos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Saldo disponible
                      td.ajuste-border-tabla.texto-left El dinero que queda después de cubrir las salidas.
                      td.ajuste-border-tabla.texto-left Ingresos totales − Salidas totales
                      td.texto-left Permite establecer si existe margen para afrontar imprevistos, aumentar el ahorro o realizar ajustes.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cumplimiento del ahorro
                      td.ajuste-border-tabla.texto-left El avance frente al ahorro planeado.
                      td.ajuste-border-tabla.texto-left Ahorro realizado / Ahorro planeado × 100
                      td.texto-left Permite determinar si se cumplió la meta de ahorro del periodo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Variación del gasto
                      td.ajuste-border-tabla.texto-left El cambio entre el gasto planeado y el gasto ejecutado.
                      td.ajuste-border-tabla.texto-left Gasto ejecutado − Gasto planeado
                      td.texto-left Ayuda a identificar aumentos o reducciones frente a lo presupuestado.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cumplimiento de metas
                      td.ajuste-border-tabla.texto-left El avance frente a una meta financiera.
                      td.ajuste-border-tabla.texto-left Valor acumulado / Valor de la meta × 100
                      td.texto-left Permite medir el progreso alcanzado respecto al objetivo establecido.
          Separador
          #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.3 Capacidad de ahorro
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .caja-2(data-aos="fade-right")
                p.mb-0 La capacidad de ahorro permite identificar qué parte del ingreso puede reservarse después de cubrir los gastos, los costos, las deudas y los demás compromisos prioritarios. No consiste únicamente en guardar el dinero que sobra al finalizar el periodo, sino en determinar si el presupuesto permite separar una cantidad realista para atender imprevistos o alcanzar metas relacionadas con la educación, la vivienda, la adquisición de herramientas, la inversión o la estabilidad familiar.
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img13.jpg', alt='').m-auto
            .col-xl.fit___bottom
              figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
                img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
              p.mb-0 En la práctica, la capacidad de ahorro se calcula comparando el valor ahorrado con el total de los ingresos del periodo. Por ejemplo, si una persona recibe $2.000.000 y logra ahorrar $100.000, su capacidad de ahorro corresponde al 5 % de sus ingresos. Este resultado permite evaluar si el ahorro es constante, si puede incrementarse o si los gastos están ocupando una parte excesiva del dinero disponible.
          p.mb-5 También es importante diferenciar la intención de ahorro del ahorro real. La intención de ahorro se presenta cuando la persona planea reservar un valor, pero no lo separa efectivamente. El ahorro real, en cambio, se materializa cuando el dinero se deposita en una cuenta, un fondo, un sobre o cualquier otro mecanismo destinado exclusivamente a ese propósito. Por esta razón, al analizar el presupuesto debe verificarse que el ahorro haya sido planeado, ejecutado y protegido de otros gastos (Banco de la República). Las siguientes situaciones permiten analizar la capacidad de ahorro en diferentes escenarios. 
      .bg-2
        .px-5
          .row.justify-content-center.mb-0
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 3.
                span Análisis de la capacidad de ahorro
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Situación
                      th.ajuste-border-tabla.texto-left Ingreso mensual
                      th.ajuste-border-tabla.texto-left Ahorro planeado
                      th.ajuste-border-tabla.texto-left Ahorro ejecutado
                      th.ajuste-border-tabla.texto-left Resultado
                      th.texto-left Interpretación
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ahorro cumplido
                      td.ajuste-border-tabla.texto-left $1.800.000
                      td.ajuste-border-tabla.texto-left $100.000
                      td.ajuste-border-tabla.texto-left $100.000
                      td.ajuste-border-tabla.texto-left 5,6 % del ingreso
                      td.texto-left La meta de ahorro se cumplió según lo planeado.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ahorro parcial
                      td.ajuste-border-tabla.texto-left $1.800.000
                      td.ajuste-border-tabla.texto-left $100.000
                      td.ajuste-border-tabla.texto-left $50.000
                      td.ajuste-border-tabla.texto-left 2,8 % del ingreso
                      td.texto-left Se logró ahorrar, pero por debajo de la meta prevista.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Sin ahorro
                      td.ajuste-border-tabla.texto-left $1.800.000
                      td.ajuste-border-tabla.texto-left $100.000
                      td.ajuste-border-tabla.texto-left $0
                      td.ajuste-border-tabla.texto-left 0 % del ingreso
                      td.texto-left No se separó dinero para ahorro durante el periodo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ahorro superior al planeado
                      td.ajuste-border-tabla.texto-left $1.800.000
                      td.ajuste-border-tabla.texto-left $100.000
                      td.ajuste-border-tabla.texto-left $150.000
                      td.ajuste-border-tabla.texto-left 8,3 % del ingreso
                      td.texto-left Se logró ahorrar más de lo previsto, lo que fortalece la estabilidad financiera.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ahorro con ingreso variable
                      td.ajuste-border-tabla.texto-left $1.500.000
                      td.ajuste-border-tabla.texto-left $80.000
                      td.ajuste-border-tabla.texto-left $40.000
                      td.ajuste-border-tabla.texto-left 2,7 % del ingreso
                      td.texto-left El ahorro fue menor; conviene revisar si la variación del ingreso afectó el cumplimiento de la meta.
          Separador
          #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.4 Nivel de endeudamiento personal
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              p El nivel de endeudamiento personal permite identificar qué parte del ingreso está comprometida en el pago de deudas. Este análisis es importante porque una persona puede contar con ingresos suficientes para cubrir sus gastos básicos y, aun así, presentar dificultades financieras cuando las cuotas de créditos, préstamos, compras a plazos o deudas informales representan una proporción significativa de sus ingresos mensuales.
              p.mb-0 Para calcular este indicador, se comparan las cuotas mensuales de las deudas con el total de los ingresos del periodo. Por ejemplo, si una persona recibe $2.000.000 al mes y paga $500.000 en cuotas, su nivel de endeudamiento corresponde al #[b 25 %]. Este resultado permite evaluar si aún existe capacidad para cubrir los gastos, ahorrar y atender imprevistos, o si es necesario evitar nuevas obligaciones financieras.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t2/img14.png', alt='').m-auto
          p.mb-5 Además del valor de las cuotas, el análisis debe considerar la fecha de pago, el saldo pendiente, el plazo, la tasa de interés, cuando aplique, y el valor total que se pagará al finalizar la obligación. De esta manera, es posible comprender el impacto de las deudas sobre el presupuesto de los periodos siguientes.  Las siguientes situaciones permiten interpretar el nivel de endeudamiento personal.
      .bg-2
        .px-5
          .row.justify-content-center.mb-0
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 4.
                span Análisis del nivel de endeudamiento personal
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Situación
                      th.ajuste-border-tabla.texto-left Ingreso mensual
                      th.ajuste-border-tabla.texto-left Cuotas mensuales de deuda
                      th.ajuste-border-tabla.texto-left Nivel de endeudamiento
                      th.texto-left Interpretación
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Endeudamiento bajo
                      td.ajuste-border-tabla.texto-left $2.000.000
                      td.ajuste-border-tabla.texto-left $200.000
                      td.ajuste-border-tabla.texto-left 10 %
                      td.texto-left Las deudas ocupan una parte moderada del ingreso.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Endeudamiento medio
                      td.ajuste-border-tabla.texto-left $2.000.000
                      td.ajuste-border-tabla.texto-left $500.000
                      td.ajuste-border-tabla.texto-left 25 %
                      td.texto-left Las cuotas requieren seguimiento para no afectar otros gastos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Endeudamiento alto
                      td.ajuste-border-tabla.texto-left $2.000.000
                      td.ajuste-border-tabla.texto-left $800.000
                      td.ajuste-border-tabla.texto-left 40 %
                      td.texto-left Las deudas reducen de forma importante el dinero disponible.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Endeudamiento crítico
                      td.ajuste-border-tabla.texto-left $2.000.000
                      td.ajuste-border-tabla.texto-left $1.100.000
                      td.ajuste-border-tabla.texto-left 55 %
                      td.texto-left Las obligaciones pueden impedir cubrir los gastos básicos y ahorrar.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Sin endeudamiento
                      td.ajuste-border-tabla.texto-left $2.000.000
                      td.ajuste-border-tabla.texto-left $0
                      td.ajuste-border-tabla.texto-left 0 %
                      td.texto-left No existe ingreso comprometido en cuotas de deuda.
          Separador
          #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.5 Relación entre ingresos y gastos
          p.mb-5 La relación entre ingresos y gastos permite determinar si los recursos recibidos durante un periodo son suficientes para cubrir las salidas de dinero. Este análisis facilita identificar si la persona está gastando menos, igual o más de lo que recibe. Cuando los gastos son inferiores a los ingresos, existe la posibilidad de ahorrar, pagar anticipadamente una deuda o avanzar en una meta financiera. En cambio, cuando los gastos son iguales o superiores a los ingresos, el presupuesto requiere ajustes.
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img15.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p.mb-0 Para realizar este análisis, se comparan los ingresos totales con los gastos totales del periodo. Por ejemplo, si una persona recibe $1.900.000 y sus gastos ascienden a $1.600.000, obtiene un excedente de $300.000. Si, por el contrario, los gastos alcanzan $2.000.000, se presenta un faltante de $100.000 que puede llevar al uso de ahorros, al endeudamiento o al incumplimiento de algunas obligaciones.
          p.mb-5 Este indicador facilita la toma de decisiones. Cuando los gastos superan los ingresos, conviene revisar primero los gastos variables, las compras no prioritarias, los pagos repetidos y aquellos consumos que pueden reducirse. Si los ingresos son superiores a los gastos, resulta recomendable destinar el excedente al ahorro, al fondo de emergencia, al pago de deudas o al cumplimiento de metas financieras. Las siguientes situaciones permiten analizar la relación entre ingresos y gastos.
      .bg-2
        .px-5
          .row.justify-content-center.mb-0
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 5.
                span Relación entre ingresos y gastos
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Situación
                      th.ajuste-border-tabla.texto-left Ingresos del periodo
                      th.ajuste-border-tabla.texto-left Gastos del periodo
                      th.ajuste-border-tabla.texto-left Resultado
                      th.texto-left Interpretación
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ingresos mayores que gastos
                      td.ajuste-border-tabla.texto-left $2.000.000
                      td.ajuste-border-tabla.texto-left $1.600.000
                      td.ajuste-border-tabla.texto-left $400.000
                      td.texto-left Existe un excedente que puede destinarse al ahorro, al pago de deudas o al cumplimiento de metas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ingresos iguales a gastos
                      td.ajuste-border-tabla.texto-left $2.000.000
                      td.ajuste-border-tabla.texto-left $2.000.000
                      td.ajuste-border-tabla.texto-left $0
                      td.texto-left No existe margen para afrontar imprevistos ni fortalecer el ahorro.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gastos mayores que ingresos
                      td.ajuste-border-tabla.texto-left $2.000.000
                      td.ajuste-border-tabla.texto-left $2.200.000
                      td.ajuste-border-tabla.texto-left -$200.000
                      td.texto-left Existe un faltante y será necesario ajustar los gastos o buscar ingresos adicionales.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gastos cercanos al ingreso
                      td.ajuste-border-tabla.texto-left $2.000.000
                      td.ajuste-border-tabla.texto-left $1.900.000
                      td.ajuste-border-tabla.texto-left $100.000
                      td.texto-left El margen disponible es reducido y cualquier imprevisto puede afectar el presupuesto.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gastos controlados
                      td.ajuste-border-tabla.texto-left $2.000.000
                      td.ajuste-border-tabla.texto-left $1.400.000
                      td.ajuste-border-tabla.texto-left $600.000
                      td.texto-left Existe una mayor posibilidad de ahorrar o fortalecer las metas financieras.
          Separador
          #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.6  Liquidez personal y disponibilidad de recursos
          p La liquidez personal corresponde al dinero que una persona tiene disponible para atender sus compromisos inmediatos sin necesidad de endeudarse. En el presupuesto personal, este concepto permite verificar si, después de cubrir los gastos, los costos, las deudas y el ahorro, permanece un saldo suficiente para responder a las necesidades del periodo o afrontar imprevistos.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .caja-1(data-aos="zoom-in").mb-3
                .row.align-items-center
                  .col-xl-auto
                    figure
                      img(src='@/assets/curso/temas/t2/img16.jpg', alt='').m-auto
                  .col-xl.caja-1_p
                    p.mb-0 La disponibilidad de recursos no depende únicamente del valor de los ingresos, sino del dinero que realmente queda libre después de cumplir las obligaciones prioritarias. Por ejemplo, una persona puede recibir $2.500.000 mensuales; sin embargo, si sus gastos, deudas y costos suman $2.400.000, su disponibilidad real será reducida. En esta situación, cualquier gasto inesperado podría obligarla a utilizar crédito, solicitar un préstamo o aplazar el pago de alguna obligación.
              p.mb-0 Analizar la liquidez permite adoptar decisiones preventivas. Cuando el saldo disponible es bajo, conviene revisar los gastos variables, evitar nuevas deudas, fortalecer el fondo de emergencia o ajustar las metas financieras. Si la disponibilidad de recursos es suficiente, es posible avanzar en el ahorro, la inversión, el pago anticipado de obligaciones o la preparación para gastos futuros. Las siguientes situaciones permiten analizar la liquidez personal y la disponibilidad de recursos.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t2/img17.png', alt='').m-auto
      .bg-2
        .px-5
          .row.justify-content-center.mb-0
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 6.
                span Análisis de liquidez personal y disponibilidad de recursos
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Situación
                      th.ajuste-border-tabla.texto-left Ingreso mensual
                      th.ajuste-border-tabla.texto-left Salidas del periodo
                      th.ajuste-border-tabla.texto-left Saldo disponible
                      th.texto-left Interpretación
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Liquidez suficiente
                      td.ajuste-border-tabla.texto-left $2.200.000
                      td.ajuste-border-tabla.texto-left $1.700.000
                      td.ajuste-border-tabla.texto-left $500.000
                      td.texto-left Existe margen para afrontar imprevistos, aumentar el ahorro o avanzar en las metas financieras.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Liquidez ajustada
                      td.ajuste-border-tabla.texto-left $2.200.000
                      td.ajuste-border-tabla.texto-left $2.050.000
                      td.ajuste-border-tabla.texto-left $150.000
                      td.texto-left El margen disponible es reducido y requiere un mayor control de los gastos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Liquidez insuficiente
                      td.ajuste-border-tabla.texto-left $2.200.000
                      td.ajuste-border-tabla.texto-left $2.300.000
                      td.ajuste-border-tabla.texto-left -$100.000
                      td.texto-left Los recursos no son suficientes y será necesario ajustar los gastos o las obligaciones.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Liquidez comprometida por deudas
                      td.ajuste-border-tabla.texto-left $2.200.000
                      td.ajuste-border-tabla.texto-left $2.100.000
                      td.ajuste-border-tabla.texto-left $100.000
                      td.texto-left Las cuotas reducen el dinero disponible para cubrir otras necesidades.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Liquidez fortalecida
                      td.ajuste-border-tabla.texto-left $2.200.000
                      td.ajuste-border-tabla.texto-left $1.500.000
                      td.ajuste-border-tabla.texto-left $700.000
                      td.texto-left Existe una mayor capacidad para ahorrar, invertir o pagar deudas anticipadamente.
          Separador
          #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.7 Cumplimiento de metas financieras
          p El cumplimiento de las metas financieras permite evaluar si el presupuesto está contribuyendo al logro de los objetivos personales o familiares. Estas metas pueden estar relacionadas con el ahorro, la educación, la vivienda, la compra de herramientas, el pago de deudas, la creación de un fondo de emergencia, la inversión o el fortalecimiento de una actividad productiva. Para que puedan evaluarse, es necesario definir un valor estimado, un plazo y un aporte periódico.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img18.png', alt='').m-auto
            .col-xl 
              .row.mb-3
                .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/t1/img5.svg', alt='').m-auto
                .col-xl
                  p.mb-0 En la práctica, no basta con plantear objetivos como "quiero ahorrar" o "quiero pagar una deuda". Es indispensable establecer cuánto dinero se necesita, en cuánto tiempo se espera alcanzar la meta y cuál será el aporte en cada periodo. Por ejemplo, si una persona desea reunir $600.000 en seis meses, deberá ahorrar $100.000 mensuales. Al finalizar cada periodo, podrá verificar si cumplió el aporte previsto, si avanzó parcialmente o si requiere ajustar la meta.
              p.mb-0 El análisis del cumplimiento de las metas financieras facilita la toma de decisiones realistas. Cuando el avance es menor al esperado, conviene revisar si el aporte mensual es adecuado, si existen gastos variables que pueden reducirse, si es necesario ampliar el plazo o si se requieren ingresos adicionales. Si la meta avanza conforme a lo planeado, el presupuesto evidencia una adecuada organización financiera y un progreso constante hacia los objetivos establecidos (Banco de la República). Las siguientes situaciones permiten analizar el cumplimiento de las metas financieras.
      .bg-2
        .px-5
          .row.justify-content-center.mb-0
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 7.
                span Análisis del cumplimiento de metas financieras
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Meta financiera
                      th.ajuste-border-tabla.texto-left Valor total de la meta
                      th.ajuste-border-tabla.texto-left Plazo definido
                      th.ajuste-border-tabla.texto-left Aporte mensual planeado
                      th.ajuste-border-tabla.texto-left Aporte realizado
                      th.ajuste-border-tabla.texto-left Resultado
                      th.texto-left Interpretación
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Fondo de emergencia
                      td.ajuste-border-tabla.texto-left $600.000
                      td.ajuste-border-tabla.texto-left 6 meses
                      td.ajuste-border-tabla.texto-left $100.000
                      td.ajuste-border-tabla.texto-left $100.000
                      td.ajuste-border-tabla.texto-left Cumplida en el mes
                      td.texto-left La meta avanza según lo planeado.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Compra de herramienta
                      td.ajuste-border-tabla.texto-left $900.000
                      td.ajuste-border-tabla.texto-left 6 meses
                      td.ajuste-border-tabla.texto-left $150.000
                      td.ajuste-border-tabla.texto-left $80.000
                      td.ajuste-border-tabla.texto-left Avance parcial
                      td.texto-left Se debe revisar si el aporte planeado es realista.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pago de deuda
                      td.ajuste-border-tabla.texto-left $1.200.000
                      td.ajuste-border-tabla.texto-left 8 meses
                      td.ajuste-border-tabla.texto-left $150.000
                      td.ajuste-border-tabla.texto-left $150.000
                      td.ajuste-border-tabla.texto-left Cumplida en el mes
                      td.texto-left El presupuesto está apoyando la reducción de la deuda.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ahorro para estudio
                      td.ajuste-border-tabla.texto-left $1.000.000
                      td.ajuste-border-tabla.texto-left 10 meses
                      td.ajuste-border-tabla.texto-left $100.000
                      td.ajuste-border-tabla.texto-left $0
                      td.ajuste-border-tabla.texto-left Sin avance
                      td.texto-left Se requiere ajustar los gastos o ampliar el plazo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mejoramiento del hogar
                      td.ajuste-border-tabla.texto-left $1.500.000
                      td.ajuste-border-tabla.texto-left 12 meses
                      td.ajuste-border-tabla.texto-left $125.000
                      td.ajuste-border-tabla.texto-left $150.000
                      td.ajuste-border-tabla.texto-left Avance superior
                      td.texto-left La meta puede cumplirse antes del plazo previsto.
          Separador
          #t_2_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.8 Interpretación de resultados presupuestales
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .caja-2.ajustes-3(data-aos="fade-right")
                p.mb-0 La interpretación de los resultados presupuestales consiste en analizar la información obtenida después de comparar los ingresos, los gastos, las deudas, el ahorro, los costos, las metas financieras y el saldo disponible. Este proceso no se limita a identificar si el resultado fue positivo o negativo, sino que busca comprender su impacto sobre la situación financiera de la persona o del núcleo familiar. Por ejemplo, un saldo positivo puede parecer favorable; sin embargo, si quedaron deudas pendientes o no se cumplió la meta de ahorro, el presupuesto aún requiere ajustes.
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img19.jpg', alt='').m-auto
            .col-xl.fit___bottom
              figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
                img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
              p.mb-0 Para interpretar adecuadamente los resultados, es necesario identificar las causas que los originaron. Si los gastos superan los ingresos, conviene establecer si el desequilibrio se produjo por compras no planificadas, aumento de precios, acumulación de deudas, disminución de los ingresos o falta de control sobre los gastos variables. Cuando existe un excedente, también es importante decidir cómo utilizarlo, ya sea para fortalecer el ahorro, cumplir una meta financiera, reducir deudas o prepararse para futuros imprevistos.
          p.mb-5 La interpretación presupuestal permite transformar la información en decisiones concretas. Un valor registrado únicamente indica una cantidad; en cambio, el análisis permite establecer las acciones más convenientes para mejorar la administración de los recursos. Por ejemplo, un nivel de endeudamiento elevado puede indicar la necesidad de evitar nuevas obligaciones, mientras que una baja capacidad de ahorro puede requerir la reducción de gastos ajustables o la redefinición de las metas financieras (López, 2016). Los siguientes resultados pueden encontrarse durante el análisis del presupuesto personal y orientar la toma de decisiones.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ingresos iguales a lo planeado
                  p #[b Posible interpretación:] la fuente de ingreso fue estable durante el periodo.
                  p.mb-0 #[b Decisión sugerida:] mantener el registro y proyectar el siguiente presupuesto con base en ese valor.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ingresos menores a lo planeado
                  p #[b Posible interpretación:] hubo disminución, retraso o ausencia de un ingreso esperado.
                  p.mb-0 #[b Decisión sugerida:] ajustar los gastos y no comprometer ingresos variables antes de recibirlos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Gastos mayores a lo planeado
                  p #[b Posible interpretación:] se presentó un aumento en el consumo, los precios o las compras no previstas.
                  p.mb-0 #[b Decisión sugerida:] revisar los gastos variables y definir límites para el siguiente periodo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Gastos menores a lo planeado
                  p #[b Posible interpretación:] hubo control del consumo o una necesidad no se presentó.
                  p.mb-0 #[b Decisión sugerida:] destinar el dinero no utilizado al ahorro, al pago de deudas o al cumplimiento de una meta financiera.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Deudas altas frente al ingreso
                  p #[b Posible interpretación:] una parte importante del ingreso está comprometida en el pago de cuotas.
                  p.mb-0 #[b Decisión sugerida:] evitar nuevas obligaciones y revisar alternativas de pago.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img24.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 A continuación, se presentan otros resultados que pueden evidenciarse durante la revisión del presupuesto personal, junto con orientaciones para la toma de decisiones: 
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Ahorro no cumplido")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img25.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ahorro no cumplido
              p #[b Posible interpretación:] la meta de ahorro no se ejecutó o el dinero se destinó a otros gastos.
              p.mb-0 #[b Decisión sugerida:] separar el ahorro al inicio del periodo y ajustar el valor si es necesario.
        .py-3.py-md-4(titulo="Saldo disponible bajo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img26.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Saldo disponible bajo
              p #[b Posible interpretación:] el margen para atender imprevistos es limitado.
              p.mb-0 #[b Decisión sugerida:] reducir los gastos aplazables y fortalecer el fondo de emergencia.
        .py-3.py-md-4(titulo="Excedente al finalizar el periodo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img27.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Excedente al finalizar el periodo
              p #[b Posible interpretación:] quedó dinero después de cubrir las obligaciones.
              p.mb-0 #[b Decisión sugerida:] destinar el excedente de forma planificada al ahorro, al pago de deudas o al cumplimiento de una meta prioritaria.
        .py-3.py-md-4(titulo="Meta financiera sin avance")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img28.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Meta financiera sin avance
              p #[b Posible interpretación:] el presupuesto no está apoyando el objetivo propuesto.
              p.mb-0 #[b Decisión sugerida:] revisar el plazo, el aporte mensual y los gastos que impiden avanzar.
        .py-3.py-md-4(titulo="Costos no descontados")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img29.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Costos no descontados
              p #[b Posible interpretación:] se está confundiendo el ingreso total con el dinero realmente disponible.
              p.mb-0 #[b Decisión sugerida:] descontar los costos antes de calcular el saldo o la ganancia real.
      p El análisis financiero del presupuesto personal permite interpretar los resultados obtenidos después de comparar la información planeada con la ejecutada. Mediante indicadores como la capacidad de ahorro, el nivel de endeudamiento, la relación entre ingresos y gastos, la liquidez personal y el cumplimiento de las metas financieras, es posible identificar si el presupuesto refleja equilibrio o si requiere ajustes.
      p.mb-0 Este análisis facilita transformar la información del presupuesto en decisiones orientadas al mejoramiento de la administración de los recursos. Además, contribuye a identificar las causas de los resultados obtenidos, evaluar el impacto de las deudas, revisar el avance del ahorro y verificar si las metas financieras son realistas, con el propósito de fortalecer la planeación financiera en los periodos siguientes.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
