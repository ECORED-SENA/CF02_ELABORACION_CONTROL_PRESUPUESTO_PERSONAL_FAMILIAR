<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Análisis de resultados y toma de decisiones financieras
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El análisis de resultados y la toma de decisiones financieras constituyen la etapa en la que la información obtenida del presupuesto se utiliza para definir acciones de mejora. Después de comprobar los valores registrados e interpretar los indicadores financieros, es necesario identificar las causas de los resultados obtenidos y establecer decisiones que fortalezcan la administración de los recursos.
          p.mb-0 Este proceso permite reconocer qué factores influyeron en el comportamiento del presupuesto, cuáles gastos o deudas afectaron el saldo disponible, cómo avanzaron las metas financieras y qué ajustes conviene realizar para mejorar la planeación del siguiente periodo. Así, el presupuesto deja de ser únicamente un registro de información y se convierte en una herramienta para orientar decisiones financieras responsables.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img1.png', alt='').m-auto
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Concepto de análisis de resultados
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El análisis de resultados consiste en revisar de forma detallada la información obtenida después de comprobar y evaluar el presupuesto personal. Su propósito es identificar qué ocurrió con los ingresos, los gastos, los costos, las deudas, el ahorro, las metas financieras y el saldo disponible durante un periodo determinado. Más que establecer si el presupuesto fue positivo o negativo, este análisis busca explicar las causas de los resultados obtenidos.
          .caja-1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t3/img2.jpg', alt='').m-auto
              .col-xl.caja-1_p
                p.mb-0 En la práctica, analizar los resultados implica responder preguntas como: #[b ¿por qué se gastó más de lo planeado?], ¿#[b qué ingreso no se recibió?], #[b ¿qué deuda afectó el saldo disponible?], #[b ¿qué gasto pudo evitarse?, ¿qué meta no avanzó?] y #[b ¿qué decisión contribuyó a mejorar el presupuesto?] Estas preguntas permiten reconocer patrones de comportamiento financiero y orientar las acciones del siguiente periodo.
          p.mb-0 Por ejemplo, si una persona finaliza el mes con un saldo negativo, el análisis puede indicar que la causa no fue únicamente la falta de ingresos, sino también el aumento de compras no planificadas, el pago de una cuota adicional o la ausencia de un fondo para imprevistos. De esta manera, las decisiones se fundamentan en información y no únicamente en percepciones. Los principales aspectos que pueden revisarse durante el análisis de resultados son los siguientes.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img3.png', alt='').m-auto
      .row.align-items-center.mb-0
        .col-xl-4(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/t3/img4.png', alt='' style="max-width: 350px").m-auto
        .col-xl-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img5.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Ingresos
              p #[b Pregunta de análisis:] ¿Se recibieron los ingresos esperados?
              p.mb-0 #[b Posible decisión:] ajustar el presupuesto si los ingresos fueron menores o variables.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img6.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Gastos fijos
              p #[b Pregunta de análisis:] ¿Se pagaron las obligaciones permanentes?
              p.mb-0 #[b Posible decisión:] mantener la prioridad sobre los pagos necesarios.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img7.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Gastos variables
              p #[b Pregunta de análisis:] ¿Aumentaron los consumos no permanentes?
              p.mb-0 #[b Posible decisión:] definir límites de gasto para el siguiente periodo.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img8.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Costos
              p #[b Pregunta de análisis:] ¿Se descontaron los costos de las actividades independientes?
              p.mb-0 #[b Posible decisión:] separar los costos antes de calcular el dinero disponible.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img9.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Deudas
              p #[b Pregunta de análisis:] ¿Las cuotas redujeron demasiado el saldo final?
              p.mb-0 #[b Posible decisión:] evitar nuevas obligaciones y revisar alternativas de pago.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img10.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Ahorro
              p #[b Pregunta de análisis:] ¿Se cumplió el valor planeado para el ahorro?
              p.mb-0 #[b Posible decisión:] separar el ahorro al inicio del periodo.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img11.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Metas financieras
              p #[b Pregunta de análisis:] ¿Hubo avance frente a los objetivos financieros?
              p.mb-0 #[b Posible decisión:] ajustar el valor, el plazo o la prioridad de la meta.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img12.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Saldo disponible
              p #[b Pregunta de análisis:] ¿El dinero restante fue suficiente?
              p.mb-0 #[b Posible decisión:] reorganizar los gastos y fortalecer el fondo de emergencia.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Técnicas básicas para analizar resultados presupuestales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2(data-aos="fade-right")
            p.mb-0 Las técnicas básicas para analizar resultados presupuestales permiten revisar la información financiera de manera organizada y práctica. Su aplicación facilita identificar diferencias entre lo planeado y lo ejecutado, reconocer las causas de los desequilibrios, comparar periodos, clasificar los gastos, revisar las deudas y determinar si las decisiones tomadas favorecieron o afectaron el manejo del dinero.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img13.jpg', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 Entre las técnicas más utilizadas se encuentran la comparación entre valores planeados y ejecutados, el análisis de variaciones, la clasificación por prioridades y la revisión de las causas que explican los resultados obtenidos. También pueden emplearse la comparación entre periodos, el análisis de porcentajes y la evaluación del cumplimiento de las metas financieras.
      p.mb-5 Por ejemplo, si el gasto en transporte aumenta, conviene establecer si el incremento se debe a un mayor número de desplazamientos, al aumento de las tarifas, a la falta de planeación de las rutas o al uso frecuente de medios de transporte más costosos. Este tipo de análisis permite orientar decisiones que mejoren el presupuesto del siguiente periodo. Las siguientes técnicas facilitan el análisis de los resultados del presupuesto personal.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img14.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Comparación planeado-ejecutado").ajuste-cajaAcordion.ajuste-vineta
              p #[b ¿En qué consiste?] Revisar el valor presupuestado frente al valor realmente utilizado.
              p #[b Ejemplo práctico:] se planeó gastar $ 300.000 en alimentación y se gastaron $ 380.000.
              p.mb-3 #[b Utilidad:] permite identificar diferencias en cada concepto del presupuesto.
            .row(titulo="Análisis de variaciones").ajuste-cajaAcordion.ajuste-vineta
              p #[b ¿En qué consiste?] Calcular aumentos o disminuciones frente a lo planeado o a periodos anteriores.
              p #[b Ejemplo práctico:] el gasto en servicios pasó de $ 180.000 a $ 230.000.
              p.mb-3 #[b Utilidad:] ayuda a reconocer cambios que requieren explicación.
            .row(titulo="Clasificación por prioridades").ajuste-cajaAcordion.ajuste-vineta
              p #[b ¿En qué consiste?] Separar los gastos indispensables, las deudas, el ahorro y los gastos aplazables.
              p #[b Ejemplo práctico:] el arriendo y la alimentación se clasifican como prioritarios; la recreación, como ajustable.
              p.mb-3 #[b Utilidad:] facilita decidir qué pagos mantener y qué gastos reducir.
            .row(titulo="Revisión de causas").ajuste-cajaAcordion.ajuste-vineta
              p #[b ¿En qué consiste?] Identificar el origen de una diferencia o un desequilibrio.
              p #[b Ejemplo práctico:] el aumento en alimentación se debe a compras no planificadas.
              p.mb-3 #[b Utilidad:] permite corregir el origen del problema financiero.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Comparación entre periodos").ajuste-cajaAcordion.ajuste-vineta
              p #[b ¿En qué consiste?] Revisar los resultados de un periodo frente a otro.
              p #[b Ejemplo práctico:] en abril se ahorraron $ 80.000 y en mayo no se logró ahorrar.
              p.mb-3 #[b Utilidad:] ayuda a identificar comportamientos repetidos o cambios importantes.
            .row(titulo="Revisión de porcentajes").ajuste-cajaAcordion.ajuste-vineta
              p #[b ¿En qué consiste?] Expresar los gastos, las deudas o el ahorro como parte del ingreso.
              p #[b Ejemplo práctico:] las deudas representan el 35 % del ingreso mensual.
              p.mb-3 #[b Utilidad:] permite medir el peso de cada concepto dentro del presupuesto.
            .row(titulo="Análisis del saldo disponible").ajuste-cajaAcordion.ajuste-vineta
              p #[b ¿En qué consiste?] Revisar el dinero que queda después de cubrir las obligaciones.
              p #[b Ejemplo práctico:] después de pagar los gastos y las deudas, quedan $ 60.000.
              p.mb-3 #[b Utilidad:] permite establecer si existe margen para imprevistos o si el presupuesto está ajustado.
            .row(titulo="Evaluación de metas").ajuste-cajaAcordion.ajuste-vineta
              p #[b ¿En qué consiste?] Comparar el avance real frente al avance planeado.
              p #[b Ejemplo práctico:] se debía ahorrar $ 100.000, pero solo se ahorraron $ 40.000.
              p.mb-3 #[b Utilidad:] permite ajustar el plazo, el valor del ahorro o la prioridad de la meta.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img15.png", alt="" ).m-auto
      p.mb-0 Las técnicas básicas de análisis permiten interpretar el presupuesto personal con mayor claridad, identificar diferencias, comprender sus causas y establecer las acciones necesarias para fortalecer la administración de los recursos en los periodos siguientes.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Identificación de causas de desequilibrio financiero
      p La identificación de las causas del desequilibrio financiero permite reconocer por qué el presupuesto personal no se mantuvo dentro de lo planeado. Un desequilibrio puede presentarse cuando los ingresos no alcanzan para cubrir los gastos, los costos, las deudas, el ahorro o las metas financieras; cuando existen pagos pendientes; cuando se recurre con frecuencia al crédito; o cuando el saldo disponible resulta insuficiente para atender las necesidades básicas y los imprevistos.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img16.png', alt='').m-auto
        .col-xl 
          .row.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img5.svg', alt='').m-auto
            .col-xl
              p.mb-0 En la práctica, el desequilibrio financiero no suele obedecer a una sola causa. Puede originarse por ingresos variables, aumento del costo de vida, gastos no planificados, compras impulsivas, exceso de deudas, falta de ahorro, emergencias familiares o ausencia de seguimiento al presupuesto. Por ello, antes de tomar decisiones, es importante identificar el origen del problema y determinar si se trata de una situación ocasional o de un comportamiento que se repite con el tiempo.
          p.mb-0 Por ejemplo, si una persona finaliza varios meses con saldo negativo, conviene analizar si los ingresos son insuficientes, si aumentaron los gastos variables, si las cuotas de las deudas representan una carga elevada o si no se están reservando recursos para atender imprevistos. Este análisis permite diferenciar un problema temporal, como una emergencia médica, de una situación permanente, como gastar de forma recurrente por encima del ingreso disponible.
      p.mb-5 Las siguientes situaciones corresponden a algunas de las causas más frecuentes de desequilibrio financiero y las acciones que permiten corregirlas:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Ingresos menores a lo esperado")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img17.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ingresos menores a lo esperado
              p #[b Señal en el presupuesto:] el dinero recibido no cubre lo planeado.
              p #[b Ejemplo práctico:] no se recibió una comisión prevista.
              p.mb-0 #[b Acción sugerida:] ajustar los gastos y no comprometer ingresos variables antes de recibirlos.
        .py-3.py-md-4(titulo="Gastos variables altos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img18.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Gastos variables altos
              p #[b Señal en el presupuesto:] los consumos superan el valor presupuestado.
              p #[b Ejemplo práctico:] aumento en compras, alimentación fuera del hogar o transporte.
              p.mb-0 #[b Acción sugerida:] establecer límites y llevar un registro diario de gastos.
        .py-3.py-md-4(titulo="Compras impulsivas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img19.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Compras impulsivas
              p #[b Señal en el presupuesto:] aparecen gastos no necesarios o no programados.
              p #[b Ejemplo práctico:] compra de ropa o tecnología sin planeación.
              p.mb-0 #[b Acción sugerida:] diferenciar las necesidades de los deseos antes de comprar.
        .py-3.py-md-4(titulo="Exceso de deudas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img20.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Exceso de deudas
              p #[b Señal en el presupuesto:]  las cuotas ocupan gran parte del ingreso.
              p #[b Ejemplo práctico:] varias cuotas mensuales reducen el saldo disponible.
              p.mb-0 #[b Acción sugerida:] evitar nuevas obligaciones y revisar alternativas de pago.
      p.mb-5 Los siguientes casos también pueden afectar el equilibrio financiero y requieren un seguimiento permanente dentro del presupuesto personal.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Falta de ahorro
                  p #[b Señal en el presupuesto:] no existe dinero reservado para imprevistos.
                  p #[b Ejemplo práctico:] una emergencia obliga a solicitar un préstamo.
                  p.mb-0 #[b Acción sugerida:] crear o fortalecer un fondo de emergencia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Costos no descontados
                  p #[b Señal en el presupuesto:] se confunde el ingreso con el dinero disponible.
                  p #[b Ejemplo práctico:] se registran ventas sin descontar los insumos.
                  p.mb-0 #[b Acción sugerida:] separar los costos antes de calcular el saldo real.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Pagos atrasados
                  p #[b Señal en el presupuesto:] se generan intereses, recargos o mora.
                  p #[b Ejemplo práctico:] se paga tarde una cuota o un servicio.
                  p.mb-0 #[b Acción sugerida:] organizar las fechas de pago y priorizar las obligaciones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Falta de seguimiento
                  p #[b Señal en el presupuesto:] el presupuesto no se revisa durante el periodo.
                  p #[b Ejemplo práctico:] el faltante se detecta únicamente al finalizar el mes.
                  p.mb-0 #[b Acción sugerida:] revisar el presupuesto semanal o quincenalmente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img24.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Identificar las causas del desequilibrio financiero permite actuar sobre el origen del problema y no únicamente sobre sus consecuencias. Cuando la persona reconoce si el desajuste proviene de los ingresos, los gastos, las deudas, los costos o de la falta de seguimiento al presupuesto, puede adoptar decisiones más acertadas para recuperar el control de sus finanzas.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Priorización de gastos y obligaciones
      p La priorización de gastos y obligaciones consiste en organizar los pagos según su importancia, urgencia e impacto sobre la estabilidad financiera personal o familiar. Cuando el presupuesto presenta diferencias, faltantes o un saldo disponible reducido, no todos los gastos pueden atenderse de la misma manera. Por ello, es necesario identificar cuáles pagos son indispensables, cuáles compromisos no pueden aplazarse y cuáles consumos pueden reducirse o posponerse.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p En la práctica, los gastos relacionados con la alimentación básica, la vivienda, los servicios públicos, la salud, el transporte necesario, la educación y las deudas vigentes suelen tener mayor prioridad, ya que inciden directamente en el bienestar y pueden generar consecuencias económicas si no se pagan oportunamente. En cambio, las compras por gusto, el entretenimiento, las salidas y otros consumos no esenciales pueden ajustarse cuando el presupuesto es limitado.
          p.mb-0 Priorizar no significa eliminar todos los gastos personales o familiares, sino administrar los recursos con mayor criterio. Por ejemplo, si una persona dispone de un saldo reducido, conviene cubrir primero el arriendo, la alimentación, los servicios públicos y las deudas con vencimiento próximo antes de realizar compras aplazables. Esta decisión contribuye a evitar mora, recargos, endeudamiento adicional y desorganización financiera. Los gastos y las obligaciones pueden clasificarse según su nivel de prioridad para facilitar la toma de decisiones.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img25.png', alt='').m-auto
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img26.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img27.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Alimentación básica
                  p #[b Nivel de prioridad:] alta.
                  p #[b Ejemplo práctico:] mercado del hogar y productos esenciales.
                  p.mb-0 #[b Decisión sugerida:] garantizar este pago antes de otros consumos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img28.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Vivienda
                  p #[b Nivel de prioridad:] alta.
                  p #[b Ejemplo práctico:] arriendo, cuota de vivienda o administración.
                  p.mb-0 #[b Decisión sugerida:] pagar en la fecha establecida para evitar mora.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img29.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Servicios públicos
                  p #[b Nivel de prioridad:] alta.
                  p #[b Ejemplo práctico:] agua, energía, gas e internet necesario.
                  p.mb-0 #[b Decisión sugerida:] controlar el consumo y evitar la suspensión del servicio.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img30.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Salud
                  p #[b Nivel de prioridad:] alta.
                  p #[b Ejemplo práctico:] medicamentos, citas, tratamientos o urgencias.
                  p.mb-0 #[b Decisión sugerida:] reservar recursos cuando sea una necesidad recurrente.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img31.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Transporte necesario
                  p #[b Nivel de prioridad:] media alta.
                  p #[b Ejemplo práctico:] desplazamientos al trabajo, al estudio o por atención familiar.
                  p.mb-0 #[b Decisión sugerida:] mantener el valor requerido y buscar alternativas más económicas cuando sea posible. 
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img32.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Deudas vigentes
                  p #[b Nivel de prioridad:] alta.
                  p #[b Ejemplo práctico:] cuotas de crédito, préstamos o compras financiadas.
                  p.mb-0 #[b Decisión sugerida:] priorizar los pagos próximos y evitar nuevas obligaciones.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img33.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Educación
                  p #[b Nivel de prioridad:] media alta.
                  p #[b Ejemplo práctico:] matrícula, útiles, transporte o conectividad para el estudio.
                  p.mb-0 #[b Decisión sugerida:] programar los pagos y separar recursos con anticipación.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img34.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Ahorro o fondo de emergencia
                  p #[b Nivel de prioridad:] media alta.
                  p #[b Ejemplo práctico:] reserva mensual para imprevistos.
                  p.mb-0 #[b Decisión sugerida:] mantener un aporte constante y acorde con la capacidad económica.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img35.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Recreación
                  p #[b Nivel de prioridad:] media o baja.
                  p #[b Ejemplo práctico:] salidas, eventos o actividades de entretenimiento.
                  p.mb-0 #[b Decisión sugerida:] ajustar este gasto según el saldo disponible.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img36.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Compras aplazables
                  p #[b Nivel de prioridad:] baja.
                  p #[b Ejemplo práctico:] ropa no urgente, accesorios o productos por gusto.
                  p.mb-0 #[b Decisión sugerida:] posponer estas compras cuando existan faltantes o deudas pendientes.
      p.mb-0 La priorización de gastos y obligaciones favorece una administración más organizada de los recursos disponibles. Al establecer el orden de los pagos, es posible reducir riesgos financieros, evitar atrasos y tomar decisiones acordes con la situación económica personal o familiar.
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Decisiones sobre reducción de gastos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Las decisiones sobre reducción de gastos permiten ajustar el presupuesto cuando los resultados evidencian faltantes, un saldo disponible reducido, aumento de los consumos o dificultades para cumplir las obligaciones y las metas financieras. Reducir gastos no significa eliminar todos los consumos personales o familiares, sino identificar cuáles pueden disminuirse, reorganizarse o aplazarse sin afectar las necesidades básicas.
          .caja-1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t3/img37.jpg', alt='').m-auto
              .col-xl.caja-1_p
                p.mb-0 En la práctica, este proceso debe comenzar con los gastos variables y aplazables, ya que suelen depender de los hábitos de consumo y de las decisiones cotidianas. Por ejemplo, las compras impulsivas, los domicilios frecuentes, las salidas no planificadas, las suscripciones poco utilizadas, los gastos hormiga o las compras repetidas pueden representar una parte importante del presupuesto. Al identificarlos, es posible establecer límites, comparar precios, planificar las compras y evitar pagos innecesarios.
          p.mb-0 También es recomendable revisar aquellos gastos que, aunque parecen pequeños, se repiten durante el mes. Un café diario, pasajes adicionales por falta de planeación, compras de bajo valor o recargas frecuentes pueden disminuir el saldo disponible cuando no se registran. Por ello, antes de tomar decisiones, conviene analizar los gastos según su categoría, frecuencia y prioridad. 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img38.png', alt='').m-auto
      p.mb-5 A continuación, se presenta un pódcast sobre las principales estrategias para reducir gastos, destacando acciones que permiten optimizar el presupuesto personal sin afectar la satisfacción de las necesidades básicas y favoreciendo una administración financiera más eficiente.
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.caja-3(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t3/img39.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Estrategias para reducir gastos y fortalecer el presupuesto personal"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t3/img40.jpg" ).m-auto
      p.mb-0 Reducir gastos implica analizar el comportamiento del presupuesto y actuar sobre aquellos consumos que pueden controlarse. Cuando se identifican los gastos ajustables y se establecen límites claros, es posible mejorar el saldo disponible, proteger las obligaciones prioritarias y fortalecer el ahorro o el cumplimiento de las metas financieras.
      Separador
      #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.6 Decisiones sobre ahorro, inversión y financiación
      p Las decisiones relacionadas con el ahorro, la inversión y la financiación permiten definir el destino de los recursos disponibles una vez cubiertos los gastos, los costos y las obligaciones. Estas decisiones deben fundamentarse en los resultados del presupuesto, ya que no resulta conveniente ahorrar, invertir o asumir una financiación sin conocer previamente la capacidad económica, el nivel de endeudamiento, la liquidez y las necesidades prioritarias.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajustes-3(data-aos="fade-right")
            p.mb-0 El ahorro consiste en reservar dinero para atender imprevistos o alcanzar metas personales y familiares. La inversión busca destinar recursos a actividades o bienes que generen beneficios futuros, como la adquisición de herramientas, el fortalecimiento de un emprendimiento o la formación personal. La financiación, por su parte, permite adquirir bienes o servicios mediante pagos futuros, pero implica comprometer parte de los ingresos de los periodos siguientes.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img41.jpg', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 Cuando el presupuesto presenta excedentes, puede destinarse una parte al ahorro, otra al pago de deudas o a inversiones que aporten valor. En cambio, si el presupuesto está ajustado, lo más recomendable es evitar nuevas financiaciones y fortalecer primero el control de los gastos. Por ejemplo, asumir una cuota elevada con un saldo disponible reducido puede afectar el cumplimiento de las obligaciones básicas y generar mora. 
      p.mb-5 Las siguientes orientaciones facilitan la toma de decisiones relacionadas con el ahorro, la inversión y la financiación.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img42.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Ahorrar para emergencias").ajuste-cajaAcordion.ajuste-vineta
              p #[b ¿Cuándo puede considerarse?] Cuando existe saldo disponible o es posible separar un valor fijo.
              p #[b Pregunta de análisis:] ¿Tengo dinero reservado para imprevistos?
              p.mb-3 #[b Recomendación práctica:] separar un valor realista al inicio del periodo.
            .row(titulo="Ahorrar para una meta").ajuste-cajaAcordion.ajuste-vineta
              p #[b ¿Cuándo puede considerarse?] Cuando existe un objetivo con valor y plazo definidos.
              p #[b Pregunta de análisis:] ¿Cuánto necesito y en cuánto tiempo?
              p.mb-3 #[b Recomendación práctica:] definir un aporte periódico según la capacidad de pago.
            .row(titulo="Invertir en herramientas").ajuste-cajaAcordion.ajuste-vineta
              p #[b ¿Cuándo puede considerarse?] Cuando la inversión fortalece una actividad productiva.
              p #[b Pregunta de análisis:] ¿Esta compra puede mejorar mis ingresos o reducir costos?
              p.mb-3 #[b Recomendación práctica:] revisar si el beneficio esperado justifica el gasto.
            .row(titulo="Invertir en formación").ajuste-cajaAcordion.ajuste-vineta
              p #[b ¿Cuándo puede considerarse?] Cuando fortalece las habilidades o las oportunidades de generar ingresos.
              p #[b Pregunta de análisis:] ¿Esta formación contribuye a mis metas personales o laborales?
              p.mb-3 #[b Recomendación práctica:] planificar el gasto y evitar endeudarse sin un análisis previo.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Pagar una deuda anticipadamente").ajuste-cajaAcordion.ajuste-vineta
              p #[b ¿Cuándo puede considerarse?] Cuando existe un excedente y la deuda genera intereses.
              p #[b Pregunta de análisis:] ¿Conviene reducir el saldo o los intereses?
              p.mb-3 #[b Recomendación práctica:] priorizar las deudas con mayor costo o próximas a vencer.
            .row(titulo="Financiar una compra").ajuste-cajaAcordion.ajuste-vineta
              p #[b ¿Cuándo puede considerarse?] Cuando el bien es necesario y la cuota se ajusta al presupuesto.
              p #[b Pregunta de análisis:] ¿Puedo pagar la cuota sin afectar los gastos básicos?
              p.mb-3 #[b Recomendación práctica:] comparar la cuota, el plazo, la tasa de interés y el valor total a pagar.
            .row(titulo="Evitar una financiación").ajuste-cajaAcordion.ajuste-vineta
              p #[b ¿Cuándo puede considerarse?] Cuando el saldo disponible es bajo o ya existen varias deudas.
              p #[b Pregunta de análisis:] ¿Esta nueva cuota puede generar un desequilibrio?
              p.mb-3 #[b Recomendación práctica:] aplazar la compra o buscar alternativas más económicas.
            .row(titulo="Reorganizar el ahorro y la inversión").ajuste-cajaAcordion.ajuste-vineta
              p #[b ¿Cuándo puede considerarse?] Cuando las metas no avanzan o cambian las prioridades.
              p #[b Pregunta de análisis:] ¿La distribución actual de los recursos sigue siendo conveniente?
              p.mb-3 #[b Recomendación práctica:] ajustar los valores, los plazos y las prioridades.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img43.png", alt="" ).m-auto
      p.mb-0 Estas decisiones deben revisarse periódicamente, ya que la situación financiera puede cambiar con el tiempo. Analizar el presupuesto antes de ahorrar, invertir o financiarse reduce el riesgo de comprometer recursos necesarios para cubrir las obligaciones básicas y facilita el logro de metas sostenibles.
      Separador
      #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.7 Decisiones frente al manejo de deudas
      p Las decisiones relacionadas con el manejo de las deudas permiten evaluar cómo las obligaciones financieras afectan el presupuesto personal y qué acciones pueden adoptarse para evitar atrasos, recargos o sobreendeudamiento. Una deuda puede corresponder a un crédito bancario, un préstamo familiar, una compra financiada, una tarjeta de crédito o cualquier compromiso de pago adquirido.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img44.png', alt='').m-auto
        .col-xl 
          .row.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img5.svg', alt='').m-auto
            .col-xl
              p.mb-0 Para analizar adecuadamente una deuda, no basta con conocer el valor de la cuota mensual. También es necesario revisar el saldo pendiente, la fecha de vencimiento, el plazo, la tasa de interés, cuando aplique, los recargos por mora y el valor total que se pagará al finalizar la obligación. Esta información facilita decidir si conviene mantener el plan de pagos, realizar abonos a capital, renegociar la deuda o evitar nuevas obligaciones.
          p.mb-0 Cuando las deudas representan una parte importante del ingreso, conviene actuar con prudencia. Si después de pagar las cuotas queda poco dinero para cubrir alimentación, transporte, servicios públicos o ahorro, asumir una nueva obligación puede generar un desequilibrio financiero. En estos casos, resulta recomendable revisar los gastos ajustables, priorizar las deudas con mayor interés, evitar compras financiadas innecesarias y organizar un calendario de pagos. Las siguientes situaciones orientan la toma de decisiones frente al manejo de las deudas.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Varias cuotas mensuales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img45.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Varias cuotas mensuales
              p #[b Riesgo financiero:] el ingreso queda muy comprometido.
              p #[b Decisión sugerida:] organizar las deudas según el valor, la fecha de pago y el saldo pendiente.
              p.mb-0 #[b Resultado esperado:] tener mayor control sobre las obligaciones vigentes.
        .py-3.py-md-4(titulo="Pago próximo al vencimiento")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img46.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Pago próximo al vencimiento
              p #[b Riesgo financiero:] pueden generarse mora o recargos.
              p #[b Decisión sugerida:] priorizar el pago antes de otros gastos aplazables.
              p.mb-0 #[b Resultado esperado:] evitar intereses de mora y reportes negativos.
        .py-3.py-md-4(titulo="Deuda con interés alto")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img47.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Deuda con interés alto
              p #[b Riesgo financiero:] aumenta el valor total por pagar.
              p #[b Decisión sugerida:] evaluar la posibilidad de realizar abonos a capital o pagar anticipadamente.
              p.mb-0 #[b Resultado esperado:] reducir intereses y liberar ingresos futuros.
        .py-3.py-md-4(titulo="Compra financiada no necesaria")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img48.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Compra financiada no necesaria
              p #[b Riesgo financiero:] se comprometen ingresos de los próximos periodos.
              p #[b Decisión sugerida:] aplazar la compra o buscar una alternativa más económica.
              p.mb-0 #[b Resultado esperado:] evitar nuevas cuotas innecesarias.
      p.mb-5 Otras situaciones también requieren seguimiento para evitar que las deudas afecten el equilibrio del presupuesto personal.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cuotas superiores a la capacidad de pago
                  p #[b Riesgo financiero:] pueden presentarse atrasos o endeudamiento adicional.
                  p #[b Decisión sugerida:] renegociar los plazos o ajustar los gastos variables.
                  p.mb-0 #[b Resultado esperado:] disminuir la presión sobre el presupuesto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img49.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Uso frecuente del crédito
                  p #[b Riesgo financiero:] dependencia del dinero prestado para cubrir gastos.
                  p #[b Decisión sugerida:] identificar las causas del faltante y reducir los consumos no prioritarios.
                  p.mb-0 #[b Resultado esperado:] recuperar el control del dinero disponible.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img50.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Falta de registro de deudas
                  p #[b Riesgo financiero:] olvidar fechas, saldos o cuotas.
                  p #[b Decisión sugerida:] elaborar un calendario de pagos.
                  p.mb-0 #[b Resultado esperado:] cumplir las obligaciones de manera organizada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img51.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Excedente mensual disponible
                  p #[b Riesgo financiero:] desaprovechar la oportunidad de reducir las deudas.
                  p #[b Decisión sugerida:] destinar una parte del excedente al pago anticipado.
                  p.mb-0 #[b Resultado esperado:] disminuir el saldo pendiente y mejorar la liquidez futura.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img52.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Un manejo adecuado de las deudas requiere información actualizada y decisiones oportunas. Revisar periódicamente las cuotas, las fechas de pago, los intereses y la capacidad de pago contribuye a reducir los costos financieros y a proteger el equilibrio del presupuesto.
      Separador
      #t_3_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.8 Ajustes al presupuesto según resultados obtenidos
      p.mb-5 Los ajustes al presupuesto permiten modificar la planeación financiera después de analizar los resultados obtenidos. Estos cambios son necesarios cuando se identifican diferencias entre lo planeado y lo ejecutado, gastos superiores a los previstos, ingresos menores, deudas que afectan el saldo disponible, metas que no avanzan o cambios en las prioridades económicas personales o familiares.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img53.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Ajustar el presupuesto no significa empezar de cero, sino corregir aquellos valores, categorías o decisiones que no dieron los resultados esperados. Por ejemplo, si el gasto en alimentación supera el valor presupuestado de manera recurrente, puede ser necesario aumentar ese rubro, organizar mejor las compras o reducir otros gastos variables. Si la meta de ahorro no se cumple, conviene separar el dinero al inicio del periodo o establecer un objetivo más realista.
      p.mb-5 Estos ajustes deben fundamentarse en información comprobada mediante soportes, registros, indicadores y el análisis de las causas identificadas. De esta manera, el presupuesto puede adaptarse mejor a la realidad económica de la persona o del núcleo familiar y servir como herramienta de control para el siguiente periodo. Los siguientes resultados pueden orientar los ajustes del presupuesto para el periodo siguiente.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ingreso menor al planeado
                  p #[b Causa posible:] ingreso variable no recibido o disminución del trabajo.
                  p #[b Ajuste al presupuesto:] reducir los gastos aplazables y no comprometer ingresos inciertos.
                  p.mb-0 #[b Efecto esperado:] evitar faltantes y pagos pendientes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img54.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Gasto en alimentación mayor al planeado
                  p #[b Causa posible:] aumento de precios o compras sin lista.
                  p #[b Ajuste al presupuesto:] ajustar el valor presupuestado y planificar las compras semanales.
                  p.mb-0 #[b Efecto esperado:] mejorar el control del mercado familiar.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img55.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Servicios públicos altos
                  p #[b Causa posible:] mayor consumo o incremento de las tarifas.
                  p #[b Ajuste al presupuesto:] revisar los hábitos de consumo y ajustar el valor presupuestado cuando sea necesario.
                  p.mb-0 #[b Efecto esperado:] evitar diferencias repetidas en el presupuesto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img56.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Deudas con alto peso mensual
                  p #[b Causa posible:] múltiples cuotas o créditos costosos.
                  p #[b Ajuste al presupuesto:] priorizar los pagos, evitar nuevas deudas y evaluar abonos anticipados.
                  p.mb-0 #[b Efecto esperado:] liberar ingresos en periodos futuros.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img57.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ahorro no cumplido
                  p #[b Causa posible:] el dinero se destinó a otros gastos.
                  p #[b Ajuste al presupuesto:] separar el ahorro al inicio del periodo y reducir los gastos variables.
                  p.mb-0 #[b Efecto esperado:] fortalecer las metas financieras y el fondo de emergencia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img58.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Otros resultados también requieren ajustes para fortalecer el presupuesto y mejorar la administración de los recursos.
      SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t3/img59.png').m-auto
          h4.mb-4.estilo-text Saldo disponible bajo
          p.mb-0 #[b Causa posible:] gastos y deudas muy cercanos al ingreso.
          p.mb-0 #[b Ajuste al presupuesto:] reducir los consumos aplazables y reorganizar las prioridades.
          p.mb-0 #[b Efecto esperado:] aumentar el margen para atender imprevistos. 
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t3/img60.png').m-auto
          h4.mb-4.estilo-text Meta financiera sin avance
          p.mb-0 #[b Causa posible:] aporte mensual poco realista o gastos elevados.
          p.mb-0 #[b Ajuste al presupuesto:] modificar el plazo, el aporte mensual o la prioridad de la meta.
          p.mb-0 #[b Efecto esperado:] hacer la meta más alcanzable.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t3/img61.png').m-auto
          h4.mb-4.estilo-text Costos no registrados
          p.mb-0 #[b Causa posible:] actividad independiente sin separación de insumos.
          p.mb-0 #[b Ajuste al presupuesto:] incorporar una categoría específica para los costos.
          p.mb-0 #[b Efecto esperado:] calcular con mayor precisión el dinero realmente disponible.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t3/img62.png').m-auto
          h4.mb-4.estilo-text Gastos pequeños acumulados
          p.mb-0 #[b Causa posible:] falta de registro diario.
          p.mb-0 #[b Ajuste al presupuesto:] establecer un límite semanal para los gastos menores.
          p.mb-0 #[b Efecto esperado:] reducir las fugas de dinero.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t3/img63.png').m-auto
          h4.mb-4.estilo-text Pagos atrasados
          p.mb-0 #[b Causa posible:] falta de organización de las fechas de vencimiento.
          p.mb-0 #[b Ajuste al presupuesto:] elaborar un calendario de pagos.
          p.mb-0 #[b Efecto esperado:] evitar mora, recargos y desorganización financiera.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajustes-4(data-aos="fade-right")
            p.mb-0 Los ajustes al presupuesto permiten que la planeación financiera evolucione de acuerdo con los resultados obtenidos. Al corregir valores, reorganizar prioridades y tomar decisiones basadas en información confiable, se fortalece el control de los recursos y se prepara un presupuesto más realista para el siguiente periodo.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img64.jpg', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 El análisis de resultados y la toma de decisiones financieras permiten comprender qué ocurrió con el presupuesto personal después de revisar los ingresos, los gastos, los costos, las deudas, el ahorro, las metas financieras y el saldo disponible. A partir de este proceso es posible identificar las causas de los resultados obtenidos y establecer acciones para mejorar la administración de los recursos.
      p.mb-0 Las decisiones relacionadas con la reducción de gastos, el ahorro, la inversión, la financiación, el manejo de las deudas y los ajustes al presupuesto contribuyen a fortalecer la organización financiera y a responder de manera más efectiva a los cambios de la situación económica. De esta forma, el presupuesto personal deja de ser un registro de valores y se convierte en una herramienta para orientar decisiones responsables y sostenibles.

</template>

<script>
import audio1 from '@/assets/curso/temas/t3/audios/audio-ej.mp3'
export default {
  name: 'Tema3',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
