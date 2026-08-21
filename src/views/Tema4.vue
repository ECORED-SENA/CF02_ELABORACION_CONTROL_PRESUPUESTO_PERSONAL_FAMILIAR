<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Acciones de mejora del presupuesto personal
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Las acciones de mejora del presupuesto personal permiten transformar los resultados del análisis financiero en decisiones concretas. Después de comprobar el presupuesto, revisar los indicadores, identificar diferencias y reconocer las causas de los desequilibrios, es necesario definir qué aspectos se deben corregir, prevenir o fortalecer. Por ejemplo, si una persona identifica que no logró ahorrar porque aumentaron sus gastos variables, la mejora no debe limitarse a la intención de "gastar menos", sino convertirse en una acción específica, como establecer un límite semanal para las compras, registrar los gastos diarios y separar el ahorro al inicio del mes.
          p.mb-0 Este capítulo tiene un enfoque práctico, ya que las acciones de mejora deben aplicarse en la vida cotidiana. Una persona o una familia puede necesitar reducir gastos, reorganizar deudas, ajustar metas, fortalecer el ahorro, controlar los gastos pequeños, revisar los soportes o mejorar el seguimiento del presupuesto. Para que estas acciones sean efectivas, deben responder a una causa identificada, incluir una actividad concreta, contar con un plazo definido y disponer de una forma sencilla de verificar su cumplimiento. 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img1.png', alt='').m-auto
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Concepto de acción de mejora
      p Una acción de mejora es una actividad concreta que se establece para corregir una dificultad, prevenir que un problema se repita o fortalecer un resultado positivo dentro del presupuesto personal. Surge después de revisar los resultados financieros y analizar sus causas. Por ello, no debe formularse de manera general, sino como una decisión específica que pueda ejecutarse y verificarse.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t4/img2.jpg', alt='').m-auto
              .col-xl.caja-1_p
                p.mb-0 Por ejemplo, si una persona identifica que sus gastos de alimentación fueron superiores a lo planeado, una acción de mejora no sería únicamente "controlar la alimentación". Una formulación más precisa consistiría en elaborar una lista de mercado semanal, comparar precios antes de comprar y establecer un valor máximo para este gasto. Así, la acción responde directamente al problema identificado y facilita verificar sus resultados en el siguiente periodo.
          p.mb-0 Las acciones de mejora también pueden surgir cuando los resultados son favorables. Si una familia termina el mes con un excedente de $150.000, puede decidir destinar una parte al fondo de emergencia, otra al pago de una deuda y otra al ahorro para una meta específica. En este caso, la acción fortalece una buena decisión financiera y evita que el excedente se utilice sin planificación.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img3.png', alt='').m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t4/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo práctico
      .caja-4(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p.mb-0 María recibe ingresos mensuales por $1.900.000. Al revisar su presupuesto, encuentra que planeó gastar $300.000 en alimentación, pero finalmente gastó $430.000. También identifica que no logró ahorrar los $80.000 previstos. Después de analizar la situación, reconoce que realizó compras pequeñas durante la semana, no llevó una lista al mercado y adquirió alimentos preparados en varios días. Con esta información define una acción de mejora: organizar un menú semanal, hacer mercado con lista, establecer un límite de $80.000 semanales para alimentación y separar el ahorro apenas reciba sus ingresos. Las siguientes situaciones presentan cómo un resultado del presupuesto puede convertirse en una acción de mejora concreta y verificable.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img5.png', alt='').m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img6.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="No se logró ahorrar el valor planeado").ajuste-cajaAcordion.ajuste-vineta
              p #[b Causa identificada:] el dinero se utilizó en gastos variables.
              p #[b Acción de mejora:] separar el ahorro al inicio del periodo.
              p #[b Plazo:] próximo mes
              p.mb-3 #[b Verificación:] comprobante, sobre físico o registro del ahorro.
            .row(titulo="El gasto en alimentación fue mayor al planeado").ajuste-cajaAcordion.ajuste-vineta
              p #[b Causa identificada:] compras sin lista y consumo fuera del hogar.
              p #[b Acción de mejora:] elaborar una lista de mercado y fijar un valor semanal.
              p #[b Plazo:] cuatro semanas
              p.mb-3 #[b Verificación:] comparación entre el gasto planeado y el ejecutado.
            .row(titulo="Se pagó tarde una cuota").ajuste-cajaAcordion.ajuste-vineta
              p #[b Causa identificada:] no se revisó la fecha de vencimiento.
              p #[b Acción de mejora:] crear un calendario de pagos mensuales.
              p #[b Plazo:] inmediato
              p.mb-3 #[b Verificación:] revisión de fechas y comprobantes de pago.
            .row(titulo="Las deudas ocupan gran parte del ingreso").ajuste-cajaAcordion.ajuste-vineta
              p #[b Causa identificada:] se asumieron varias cuotas al mismo tiempo.
              p #[b Acción de mejora:]  evitar nuevas deudas y priorizar los pagos pendientes.
              p #[b Plazo:] tres meses
              p.mb-3 #[b Verificación:] disminución del saldo o cumplimiento de las cuotas.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="El saldo disponible fue muy bajo").ajuste-cajaAcordion.ajuste-vineta
              p #[b Causa identificada:] gastos variables altos y poco seguimiento.
              p #[b Acción de mejora:] registrar los gastos diarios y establecer límites por categoría.
              p #[b Plazo:] un mes
              p.mb-3 #[b Verificación:] registro semanal de gastos.
            .row(titulo="No avanzó una meta financiera").ajuste-cajaAcordion.ajuste-vineta
              p #[b Causa identificada:] el aporte mensual era poco realista.
              p #[b Acción de mejora:] ajustar el valor del aporte o ampliar el plazo.
              p #[b Plazo:] próximo periodo
              p.mb-3 #[b Verificación:] revisión del avance acumulado de la meta.
            .row(titulo="Hubo excedente al finalizar el mes").ajuste-cajaAcordion.ajuste-vineta
              p #[b Causa identificada:] mejor control de algunos gastos.
              p #[b Acción de mejora:] destinar el excedente al ahorro, al pago de deudas o al fondo de emergencia.
              p #[b Plazo:] final del periodo
              p.mb-3 #[b Verificación:] registro del destino dado al excedente.
            .row(titulo="No se descontaron los costos de una actividad independiente").ajuste-cajaAcordion.ajuste-vineta
              p #[b Causa identificada:] se confundió el ingreso con el dinero disponible.
              p #[b Acción de mejora:] separar los costos de insumos, transporte y materiales.
              p #[b Plazo:] próximo registro de ingresos.
              p.mb-3 #[b Verificación:] comparación entre ingreso total, costos y saldo real.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img7.png", alt="" ).m-auto
      p.mb-0 Una acción de mejora permite pasar del análisis a la práctica. Cuando la persona identifica el problema, reconoce su causa y define una actividad concreta, el presupuesto se convierte en una herramienta útil para corregir decisiones, fortalecer hábitos financieros y mejorar el manejo de los recursos en los siguientes periodos.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Importancia de las acciones de mejora en el presupuesto personal
      p Las acciones de mejora son fundamentales porque evitan que el presupuesto personal se limite a la revisión de cifras y lo convierten en una herramienta para corregir decisiones y fortalecer la administración del dinero. Después de identificar diferencias, faltantes, excedentes o metas no cumplidas, es necesario definir qué acciones se realizarán para mejorar los resultados en el siguiente periodo.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajustes-5(data-aos="fade-right")
            p.mb-0 En la práctica, una acción de mejora permite intervenir sobre la causa del problema. Por ejemplo, si una familia termina el mes con un faltante debido al aumento de los gastos variables, no basta con reconocer que gastó más de lo previsto. Es necesario establecer acciones concretas, como registrar los gastos diarios, fijar un límite semanal para las compras, comparar precios, reducir el uso de domicilios o separar primero el dinero destinado a las obligaciones principales.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t4/img8.jpg', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 Las acciones de mejora también ayudan a prevenir dificultades futuras. Si una persona identifica que no cuenta con un fondo de emergencia, puede empezar a construirlo antes de enfrentar un imprevisto. De igual manera, si identifica que sus deudas aumentan progresivamente, puede decidir no adquirir nuevas obligaciones y organizar un plan de pagos. Así, el presupuesto se mantiene actualizado, realista y orientado a la toma de decisiones.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t4/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo práctico
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t4/img9.png', alt='').m-auto
          .col-xl.caja-1_p
            p.mb-0 La familia Rodríguez recibe ingresos mensuales por $2.400.000. Al revisar su presupuesto encuentra que los gastos planeados eran de $2.100.000, pero los gastos ejecutados ascendieron a $2.380.000. La diferencia se originó por compras no planificadas, aumento en los servicios públicos y uso frecuente de domicilios. Además, no lograron ahorrar los $100.000 previstos. Como acciones de mejora deciden reducir los domicilios a dos veces al mes, revisar el consumo de energía, hacer mercado con lista y separar el ahorro al inicio de cada periodo. Las siguientes situaciones presentan cómo las acciones de mejora contribuyen a fortalecer el presupuesto personal.
      .row.align-items-center.mb-5
        .col-xl-4(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/t4/img10.png', alt='' style="max-width: 350px").m-auto
        .col-xl-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img11.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Gastos mayores a lo planeado
              p #[b Importancia:] controlar los consumos que afectan el saldo disponible.
              p #[b Ejemplo de acción:] establecer límites semanales por categoría.
              p.mb-0 #[b Resultado esperado:] reducir las diferencias entre lo planeado y lo ejecutado.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img12.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Ahorro no cumplido
              p #[b Importancia:] proteger una meta financiera o un fondo de emergencia.
              p #[b Ejemplo de acción:] separar el ahorro al recibir el ingreso.
              p.mb-0 #[b Resultado esperado:] aumentar la constancia en el ahorro.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img13.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Deudas en aumento
              p #[b Importancia:] prevenir el sobreendeudamiento y la pérdida de liquidez.
              p #[b Ejemplo de acción:] evitar nuevas cuotas y priorizar las deudas vigentes.
              p.mb-0 #[b Resultado esperado:] disminuir la presión sobre el ingreso mensual.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img14.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Falta de soportes
              p #[b Importancia:] mejorar la verificación de la información registrada.
              p #[b Ejemplo de acción:] guardar recibos, facturas y comprobantes por categoría.
              p.mb-0 #[b Resultado esperado:] disponer de información más confiable para el análisis.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img15.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Gastos pequeños no registrados
              p #[b Importancia:] identificar fugas de dinero.
              p #[b Ejemplo de acción:] llevar un registro diario de compras menores.
              p.mb-0 #[b Resultado esperado:] conocer el destino real del dinero.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img16.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Metas sin avance
              p #[b Importancia:] ajustar el valor, el plazo o la prioridad de la meta.
              p #[b Ejemplo de acción:] redefinir el aporte mensual según la capacidad de pago.
              p.mb-0 #[b Resultado esperado:] hacer la meta más alcanzable.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img17.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Ingresos variables
              p #[b Importancia:] evitar comprometer recursos inciertos.
              p #[b Ejemplo de acción:] elaborar el presupuesto con base en ingresos seguros.
              p.mb-0 #[b Resultado esperado:] reducir faltantes por ingresos no recibidos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img18.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Excedente mensual
              p #[b Importancia:] aprovechar mejor el dinero disponible.
              p #[b Ejemplo de acción:] destinarlo al ahorro, al pago de deudas o a una meta prioritaria.
              p.mb-0 #[b Resultado esperado:]  fortalecer la estabilidad financiera.
      p.mb-0 Las acciones de mejora permiten que cada revisión del presupuesto tenga una utilidad práctica. Al definir qué aspectos se deben corregir, prevenir o fortalecer, la persona transforma los resultados del análisis en decisiones aplicables y mejora progresivamente su organización financiera.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Tipos de acciones de mejora: correctivas, preventivas y de fortalecimiento
      p.mb-5 Las acciones de mejora pueden clasificarse en correctivas, preventivas y de fortalecimiento. Esta clasificación permite definir con mayor precisión la decisión que debe adoptarse según el resultado identificado en el presupuesto personal. No todas las acciones responden a una dificultad: algunas buscan impedir que un problema ocurra o se repita, mientras que otras permiten aprovechar y consolidar resultados financieros favorables.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Acciones correctivas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img19.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Acciones correctivas
              p.mb-0 Se aplican cuando una dificultad ya se presentó. Por ejemplo, si una persona gastó más de lo planeado, pagó tarde una deuda o no alcanzó la meta de ahorro, debe definir una actividad que contribuya a corregir esa situación.
        .py-3.py-md-4(titulo="Acciones preventivas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img20.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Acciones preventivas
              p.mb-0 Se formulan antes de que una dificultad ocurra o vuelva a presentarse. Entre ellas se encuentran crear un fondo de emergencia, organizar las fechas de pago o elaborar el presupuesto únicamente con ingresos seguros.
        .py-3.py-md-4(titulo="Acciones de fortalecimiento")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Acciones de fortalecimiento
              p.mb-0 Buscan consolidar un resultado positivo. Algunos ejemplos son aumentar el aporte destinado al ahorro, pagar anticipadamente una deuda o asignar un excedente a una meta financiera prioritaria.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t4/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo práctico
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t4/img22.png', alt='').m-auto
          .col-xl.caja-1_p
            p.mb-0 Andrés analiza su presupuesto mensual e identifica tres situaciones. Primero, gastó $90.000 más de lo planeado en transporte porque no organizó sus recorridos; para corregir esta situación, decide planificar sus rutas semanalmente. Segundo, reconoce que no cuenta con dinero reservado para imprevistos; como medida preventiva, decide separar $50.000 mensuales para un fondo de emergencia. Tercero, obtiene un excedente de $120.000 al finalizar el mes; para fortalecer su presupuesto, destina $70.000 al ahorro y $50.000 al pago de una deuda. Los tipos de acciones de mejora que pueden aplicarse según los resultados del presupuesto personal son los siguientes:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Correctiva
                  p #[b ¿Cuándo se aplica?] Cuando ya se presentó un problema o una diferencia negativa.
                  p #[b Situaciones:] el gasto en alimentación superó lo planeado o se pagó tarde una cuota de crédito.
                  p #[b Acciones propuestas:] elaborar una lista de mercado y establecer un límite semanal; crear un calendario de pagos y programar recordatorios.
                  p.mb-0 #[b Resultado esperado:] reducir el exceso de gasto y evitar mora o recargos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Preventiva
                  p #[b ¿Cuándo se aplica?] Cuando se busca evitar una dificultad futura.
                  p #[b Situaciones:] no existe un fondo para imprevistos o los ingresos son variables.
                  p #[b Acciones propuestas:] separar un valor mensual para emergencias y presupuestar únicamente los ingresos seguros.
                  p.mb-0 #[b Resultado esperado:] disponer de recursos para imprevistos y evitar comprometer ingresos inciertos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img24.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 De fortalecimiento
                  p #[b ¿Cuándo se aplica?] Cuando se obtiene un resultado positivo.
                  p #[b Situaciones:] quedó un excedente al finalizar el mes o la meta de ahorro avanza según lo planeado.
                  p #[b Acciones propuestas:] destinar el excedente al ahorro o al pago de una deuda y mantener o aumentar el aporte al ahorro.
                  p.mb-0 #[b Resultado esperado:] aprovechar mejor el dinero disponible y acelerar el cumplimiento de las metas financieras.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img25.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Correctiva y preventiva
                  p #[b ¿Cuándo se aplica?] Cuando una dificultad se repite durante varios periodos.
                  p #[b Situaciones:] los gastos hormiga afectan el saldo disponible.
                  p #[b Acciones propuestas:] registrar los gastos diarios y establecer un límite semanal.
                  p.mb-0 #[b Resultado esperado:] corregir el hábito y prevenir nuevos faltantes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img26.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Preventiva y de fortalecimiento
                  p #[b ¿Cuándo se aplica?] Cuando existe estabilidad en los ingresos y los gastos.
                  p #[b Situaciones:] el presupuesto mantiene un saldo positivo de forma constante.
                  p #[b Acciones propuestas:] crear una meta de ahorro o inversión.
                  p.mb-0 #[b Resultado esperado:] fortalecer la planeación financiera futura.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img27.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Esta clasificación facilita la formulación de acciones más precisas. Al establecer si la intención es corregir, prevenir o fortalecer, la persona puede plantear actividades claras, medibles y relacionadas con los resultados reales de su presupuesto.
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Formulación de acciones de mejora según resultados del presupuesto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajustes-2(data-aos="fade-right")
            p.mb-0 La formulación de acciones de mejora consiste en transformar un resultado presupuestal en una actividad concreta que pueda aplicarse, medirse y comprobarse. Para ello, primero se identifica el resultado obtenido; luego, se analiza su causa; posteriormente, se define qué se hará, en qué plazo, con qué recursos y mediante qué mecanismo se comprobará el cumplimiento.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t4/img28.jpg', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 Una acción de mejora debe ser clara, específica y posible de realizar. Por esta razón, no es suficiente emplear expresiones generales como «mejorar el ahorro», «reducir gastos» o «pagar deudas». Es necesario precisar la actividad. Algunos ejemplos son: «separar $80.000 al inicio de cada mes para el fondo de emergencia», «reducir los domicilios a dos veces al mes» o «pagar la cuota del crédito antes del día 10 de cada mes».
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t4/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo práctico
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t4/img29.png', alt='').m-auto
          .col-xl.caja-1_p
            p Carolina analiza su presupuesto y encuentra que durante el mes recibió $2.100.000, mientras que sus gastos y deudas sumaron $2.050.000. Aunque finalizó con un saldo positivo de $50.000, no alcanzó la meta de ahorro de $120.000. Al analizar las causas, identifica que destinó $180.000 a domicilios y compras pequeñas que no había registrado.
            p.mb-0 Con esta información, Carolina formula tres acciones de mejora: separar el ahorro al inicio del mes, establecer un valor máximo semanal para los gastos pequeños y reducir los domicilios a dos veces al mes. Estas acciones responden directamente a las causas identificadas y cuentan con criterios que permiten comprobar su cumplimiento. Los siguientes ejemplos permiten relacionar los resultados del presupuesto con acciones de mejora específicas:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 8.
                span Formulación de acciones de mejora según los resultados del presupuesto personal
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Resultado del presupuesto
                      th.ajuste-border-tabla.texto-left Causa identificada
                      th.ajuste-border-tabla.texto-left Acción de mejora formulada
                      th.ajuste-border-tabla.texto-left Plazo
                      th.texto-left Comprobación
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold No se cumplió la meta de ahorro.
                      td.ajuste-border-tabla.texto-left El dinero se utilizó en gastos variables.
                      td.ajuste-border-tabla.texto-left Separar $120.000 al inicio del mes en una cuenta o un sobre de ahorro.
                      td.ajuste-border-tabla.texto-left Próximo mes
                      td.texto-left Comprobante o registro del dinero separado.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aumentaron los gastos pequeños.
                      td.ajuste-border-tabla.texto-left No se registraron las compras diarias.
                      td.ajuste-border-tabla.texto-left Llevar un registro diario y establecer un límite semanal de $40.000.
                      td.ajuste-border-tabla.texto-left Cuatro semanas
                      td.texto-left Análisis semanal del registro de gastos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Se gastó más en domicilios.
                      td.ajuste-border-tabla.texto-left Se compró comida preparada varias veces.
                      td.ajuste-border-tabla.texto-left Reducir los domicilios a un máximo de dos veces al mes.
                      td.ajuste-border-tabla.texto-left Un mes
                      td.texto-left Comparación entre el gasto ejecutado y el planeado.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold La cuota de una deuda se pagó tarde.
                      td.ajuste-border-tabla.texto-left No se tuvo en cuenta la fecha de vencimiento.
                      td.ajuste-border-tabla.texto-left Programar un recordatorio tres días antes de la fecha de pago.
                      td.ajuste-border-tabla.texto-left Inmediato
                      td.texto-left Comprobante de pago oportuno.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold La meta financiera no avanzó.
                      td.ajuste-border-tabla.texto-left El aporte mensual era alto frente al saldo disponible.
                      td.ajuste-border-tabla.texto-left Ajustar el aporte mensual y ampliar el plazo de la meta.
                      td.ajuste-border-tabla.texto-left Próximo periodo
                      td.texto-left Análisis del nuevo avance acumulado.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold El saldo disponible fue bajo.
                      td.ajuste-border-tabla.texto-left Los gastos variables quedaron muy cerca del ingreso.
                      td.ajuste-border-tabla.texto-left Reducir las compras aplazables y priorizar los gastos básicos.
                      td.ajuste-border-tabla.texto-left Un mes
                      td.texto-left Comparación con el saldo final del siguiente periodo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold No se descontaron los costos de las ventas.
                      td.ajuste-border-tabla.texto-left El ingreso total se registró como dinero disponible.
                      td.ajuste-border-tabla.texto-left Separar los costos de insumos, empaques y transporte antes de calcular el saldo.
                      td.ajuste-border-tabla.texto-left Próxima venta
                      td.texto-left Registro diferenciado del ingreso, los costos y el dinero disponible.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Hubo un excedente al finalizar el mes.
                      td.ajuste-border-tabla.texto-left Se controlaron algunos gastos.
                      td.ajuste-border-tabla.texto-left Destinar el excedente al ahorro, al pago de una deuda o al fondo de emergencia.
                      td.ajuste-border-tabla.texto-left Final del periodo
                      td.texto-left Registro del destino asignado al excedente.
          p.mb-5 Para formular una acción de mejora de manera organizada, se recomienda seguir la siguiente ruta:
          .bg-carrusel
            .px-5
              SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img30.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Analizar el resultado del presupuesto
                  p.mb-0.text-center Comparar los valores planeados con los ejecutados.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img31.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Identificar la diferencia
                  p.mb-0.text-center Reconocer faltantes, excedentes o desviaciones frente a lo presupuestado.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img32.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Analizar la causa
                  p.mb-0.text-center Precisar por qué ocurrió la situación y determinar si fue ocasional o recurrente.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img33.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Formular la acción de mejora
                  p.mb-0.text-center Definir una actividad concreta, realista y relacionada con la causa identificada.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img34.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Establecer el plazo y la forma de comprobación
                  p.mb-0.text-center Determinar cuándo debe cumplirse la acción y qué evidencia permitirá confirmar su ejecución.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img35.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Hacer seguimiento al cumplimiento
                  p.mb-0.text-center Analizar los avances obtenidos y efectuar los ajustes que sean necesarios.
              p.mb-0 La formulación de acciones de mejora permite que el análisis presupuestal tenga una aplicación directa. Cuando cada acción responde a una causa, cuenta con un plazo y dispone de una forma de comprobación, la persona puede reconocer sus avances y efectuar ajustes más efectivos durante el siguiente periodo.
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 Plan de mejora: actividades, responsables, recursos y tiempos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El plan de mejora permite organizar las acciones definidas después de analizar los resultados del presupuesto personal. Su propósito es convertir cada acción en una ruta de trabajo clara, indicando qué se va a hacer, quién será el responsable, cuándo se realizará, qué recursos se requieren y cómo se verificará el avance. De esta manera, la mejora deja de ser una intención general y se convierte en un compromiso concreto.
          p.mb-0 En la práctica, el plan de mejora puede aplicarse a situaciones como la reducción de gastos, el cumplimiento del ahorro, el pago oportuno de deudas, la organización de soportes, el control de gastos pequeños o el avance de las metas financieras. Por ejemplo, si una familia identifica que no logró ahorrar porque gastó más de lo previsto en compras no prioritarias, el plan debe incluir actividades específicas, como registrar los gastos diarios, establecer un límite semanal y separar el ahorro al inicio del mes.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img36.png', alt='').m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t4/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo práctico
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t4/img37.png', alt='').m-auto
          .col-xl.caja-1_p
            p.mb-0 La familia Gómez revisó su presupuesto mensual y encontró tres dificultades: no logró ahorrar los $100.000 previstos, pagó tarde una cuota de crédito y gastó $150.000 más de lo planeado en alimentación. Al analizar las causas, identificó que no separó el ahorro al recibir el ingreso, no tenía un calendario de pagos y realizó compras sin lista. Para mejorar la situación, elaboró un plan con actividades concretas, responsables, tiempos de cumplimiento y mecanismos de verificación. El siguiente ejemplo presenta un plan de mejora para organizar las actividades, los responsables, los recursos, los tiempos y la forma de verificar cada acción.
      .bg-1
        .px-5
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 9.
            span Plan de acciones de mejora para el presupuesto personal
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Situación a mejorar
                  th.ajuste-border-tabla.texto-left Actividad de mejora
                  th.ajuste-border-tabla.texto-left Responsable
                  th.ajuste-border-tabla.texto-left Recursos necesarios
                  th.ajuste-border-tabla.texto-left Tiempo de aplicación
                  th.texto-left Verificación
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold No se logró ahorrar el valor planeado.
                  td.ajuste-border-tabla.texto-left Separar $100.000 al inicio del mes.
                  td.ajuste-border-tabla.texto-left Persona responsable del presupuesto familiar.
                  td.ajuste-border-tabla.texto-left Cuenta de ahorro, sobre físico o registro digital.
                  td.ajuste-border-tabla.texto-left Primer día de ingreso.
                  td.texto-left Comprobante o registro del ahorro separado.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Pago tardío de una cuota.
                  td.ajuste-border-tabla.texto-left Crear un calendario de pagos con las fechas de vencimiento.
                  td.ajuste-border-tabla.texto-left Persona encargada de pagar las obligaciones.
                  td.ajuste-border-tabla.texto-left Calendario físico, celular o agenda.
                  td.ajuste-border-tabla.texto-left Inmediato y revisión mensual.
                  td.texto-left Comprobante de pago antes de la fecha límite.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Gasto alto en alimentación
                  td.ajuste-border-tabla.texto-left Elaborar una lista de mercado y definir un valor semanal.
                  td.ajuste-border-tabla.texto-left Integrantes del hogar que realizan las compras.
                  td.ajuste-border-tabla.texto-left Lista de mercado, presupuesto semanal y facturas.
                  td.ajuste-border-tabla.texto-left Cuatro semanas.
                  td.texto-left Comparación entre el gasto planeado y el ejecutado.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Compras pequeñas no registradas.
                  td.ajuste-border-tabla.texto-left Registrar diariamente los gastos menores.
                  td.ajuste-border-tabla.texto-left Cada integrante que maneje dinero.
                  td.ajuste-border-tabla.texto-left Cuaderno, hoja electrónica o aplicación móvil.
                  td.ajuste-border-tabla.texto-left Revisión semanal.
                  td.texto-left Registro diario actualizado.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Deudas con alto peso mensual.
                  td.ajuste-border-tabla.texto-left Evitar nuevas cuotas y priorizar los pagos vigentes.
                  td.ajuste-border-tabla.texto-left Persona responsable de las decisiones financieras.
                  td.ajuste-border-tabla.texto-left Extractos, recibos y lista de deudas.
                  td.ajuste-border-tabla.texto-left Tres meses.
                  td.texto-left Disminución de saldos o cumplimiento de las cuotas.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Meta financiera sin avance.
                  td.ajuste-border-tabla.texto-left Ajustar el aporte mensual y ampliar el plazo.
                  td.ajuste-border-tabla.texto-left Persona o familia que definió la meta.
                  td.ajuste-border-tabla.texto-left Registro de la meta, valor acumulado y plazo.
                  td.ajuste-border-tabla.texto-left Próximo periodo.
                  td.texto-left Comparación del avance mensual.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Falta de soportes financieros.
                  td.ajuste-border-tabla.texto-left Guardar recibos y comprobantes por categoría.
                  td.ajuste-border-tabla.texto-left Persona que realiza pagos o compras.
                  td.ajuste-border-tabla.texto-left Carpeta física o digital.
                  td.ajuste-border-tabla.texto-left Durante todo el mes.
                  td.texto-left Soportes clasificados al cierre del periodo.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Saldo disponible bajo.
                  td.ajuste-border-tabla.texto-left Reducir los gastos aplazables y revisar los gastos variables.
                  td.ajuste-border-tabla.texto-left Persona o núcleo familiar.
                  td.ajuste-border-tabla.texto-left Presupuesto actualizado y registro de gastos.
                  td.ajuste-border-tabla.texto-left Un mes.
                  td.texto-left Aumento del saldo disponible al cierre del periodo.
          p.mb-0 A partir de este plan, las acciones de mejora pueden organizarse y revisarse con mayor facilidad. Cuando cada actividad tiene un responsable, un tiempo de ejecución, los recursos necesarios y una forma de verificación, la persona o la familia puede hacer seguimiento a los compromisos y comprobar si realmente se están corrigiendo las situaciones identificadas en el presupuesto.
          Separador
          #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.6 Seguimiento a compromisos financieros personales y familiares
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              p El seguimiento a los compromisos financieros permite verificar si las acciones de mejora se están cumpliendo durante el periodo establecido. No basta con formular un plan; también es necesario comprobar si las actividades se realizaron, si los responsables cumplieron los compromisos, si los pagos se efectuaron oportunamente, si el ahorro fue separado y si los gastos permanecieron dentro de los límites definidos. Esta revisión facilita detectar avances, retrasos o nuevas dificultades antes de que afecten nuevamente el presupuesto.
              .caja-1(data-aos="zoom-in").mb-3
                .row.align-items-center
                  .col-xl-auto
                    figure
                      img(src='@/assets/curso/temas/t4/img38.jpg', alt='').m-auto
                  .col-xl.caja-1_p
                    p.mb-0 En el presupuesto personal y familiar, los compromisos pueden estar relacionados con el pago de deudas, los servicios públicos, el arriendo, el ahorro, la reducción de gastos variables, el control de compras pequeñas, la organización de soportes o el cumplimiento de metas financieras. Por ejemplo, si una familia acordó reducir los domicilios a dos veces al mes, el seguimiento consiste en revisar cuántos domicilios realizó, cuánto dinero destinó a ese concepto y si esta decisión mejoró el saldo disponible.
              p.mb-0 El seguimiento puede realizarse semanal, quincenal o mensualmente, según la situación económica de la persona o del núcleo familiar. Cuando existen ingresos variables, numerosas deudas o gastos difíciles de controlar, conviene efectuar revisiones con mayor frecuencia.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t4/img39.png', alt='').m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t4/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo práctico
      .caja-4.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p.mb-0 La familia Gómez formuló un plan de mejora para ahorrar $100.000 mensuales, pagar las cuotas antes de la fecha límite y reducir el gasto en alimentación. Durante la revisión de la segunda semana, identifica que ya separó el ahorro y pagó una cuota oportunamente, pero el gasto en mercado continúa por encima de lo previsto debido a compras sin lista. Como ajuste, acuerdan planificar un menú semanal, comparar precios y conservar las facturas para revisar el gasto al finalizar el mes. Las siguientes acciones permiten realizar seguimiento a los compromisos definidos dentro del plan de mejora del presupuesto personal.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img40.png', alt='').m-auto
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Separar $100.000 para ahorro mensual
                  p #[b Fecha de revisión:] primera semana del mes.
                  p #[b Avance:] el dinero fue separado al recibir el ingreso.
                  p #[b Dificultad:] ninguna.
                  p.mb-0 #[b Decisión de ajuste:] mantener la acción durante los siguientes meses.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img41.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Pagar la cuota del crédito antes del día 10
                  p #[b Fecha de revisión:] día 8 del mes.
                  p #[b Avance:] la cuota fue pagada antes del vencimiento.
                  p #[b Dificultad:] ninguna.
                  p.mb-0 #[b Decisión de ajuste:] conservar el recordatorio mensual.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img42.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Reducir el gasto en alimentación
                  p #[b Fecha de revisión:] segunda semana del mes.
                  p #[b Avance:] el gasto fue superior a lo previsto.
                  p #[b Dificultad:] compras sin lista y productos no planeados.
                  p.mb-0 #[b Decisión de ajuste:] elaborar una lista de mercado y establecer un valor máximo semanal.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img43.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Registrar los gastos pequeños
                  p #[b Fecha de revisión:] cada viernes.
                  p #[b Avance:] se registraron algunos gastos, pero faltaron compras menores.
                  p #[b Dificultad:] olvido en las anotaciones diarias.
                  p.mb-0 #[b Decisión de ajuste:] registrar los gastos en el celular inmediatamente después de cada compra.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img44.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Otros compromisos también requieren seguimiento periódico para mantener el plan de mejora actualizado y acorde con la realidad financiera.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Evitar nuevas deudas
                  p #[b Fecha de revisión:] final del mes.
                  p #[b Avance:] no se adquirieron nuevas cuotas.
                  p #[b Dificultad:] intención de comprar un electrodoméstico financiado.
                  p.mb-0 #[b Decisión de ajuste:] aplazar la compra y ahorrar primero una parte del valor.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img45.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Guardar los soportes financieros
                  p #[b Fecha de revisión:] cada semana.
                  p #[b Avance:] se conservaron los recibos de servicios públicos y mercado.
                  p #[b Dificultad:] faltaron comprobantes de transporte.
                  p.mb-0 #[b Decisión de ajuste:] utilizar una carpeta o un sobre para guardar todos los recibos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img46.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Revisar el saldo disponible
                  p #[b Fecha de revisión:] quincenalmente.
                  p #[b Avance:] el saldo está ajustado, pero no es negativo.
                  p #[b Dificultad:] gastos variables altos.
                  p.mb-0 #[b Decisión de ajuste:] reducir las compras aplazables durante la segunda quincena.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img47.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Avanzar en la meta del fondo de emergencia
                  p #[b Fecha de revisión:] final del mes.
                  p #[b Avance:] se acumuló el primer aporte.
                  p #[b Dificultad:] el valor aún es bajo frente a posibles imprevistos.
                  p.mb-0 #[b Decisión de ajuste:] mantener el aporte mensual y aumentarlo si existe un excedente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img48.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 El seguimiento permite comprobar si las acciones de mejora están generando cambios en el presupuesto. Al revisar los avances, las dificultades y las decisiones de ajuste, la persona o la familia puede corregir oportunamente, mantener los compromisos cumplidos y fortalecer el control de sus recursos.
      Separador
      #t_4_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.7 Indicadores sencillos para medir avances
      p Los indicadores sencillos permiten comprobar si las acciones de mejora están produciendo cambios reales en el presupuesto personal o familiar. Estos indicadores no requieren cálculos complejos, ya que se basan en la comparación de valores, porcentajes, fechas o avances definidos en el plan de mejora. Su utilidad consiste en determinar si la persona está ahorrando más, gastando menos, pagando oportunamente, reduciendo deudas o avanzando hacia sus metas.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2(data-aos="fade-right")
            p.mb-0 En la práctica, cada acción de mejora debe contar con una forma de medición. Por ejemplo, si la acción consiste en reducir el gasto en alimentación, el indicador puede ser la diferencia entre el gasto planeado y el ejecutado. Si busca fortalecer el ahorro, el indicador puede ser el porcentaje de cumplimiento del ahorro mensual. Cuando la acción se relaciona con las deudas, el avance puede medirse mediante el cumplimiento de las fechas de pago, la disminución del saldo pendiente o la reducción del número de cuotas.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t4/img49.jpg', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 Estos indicadores también facilitan la toma de decisiones durante el seguimiento. Si el avance es positivo, la acción puede mantenerse o fortalecerse. Si es parcial, conviene revisar las dificultades y ajustar el plan. Cuando no existe avance, es necesario analizar si la acción fue poco realista, si faltaron recursos, si el plazo fue insuficiente o si no hubo un seguimiento adecuado.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t4/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo práctico
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t4/img50.png', alt='').m-auto
          .col-xl.caja-1_p
            p.mb-0 Laura formuló tres acciones de mejora: ahorrar $80.000 mensuales, reducir el gasto en transporte de $180.000 a $150.000 y pagar puntualmente una cuota de $200.000. Al finalizar el mes, revisa sus indicadores y encuentra que logró ahorrar los $80.000, gastó $160.000 en transporte y pagó la cuota antes de la fecha límite. Con estos resultados decide mantener el ahorro, mejorar la planificación de sus desplazamientos y conservar el recordatorio de pago.
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 10.
                span Indicadores sencillos para medir avances del plan de mejora
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Acción de mejora
                      th.ajuste-border-tabla.texto-left Indicador de avance
                      th.ajuste-border-tabla.texto-left Forma de cálculo o revisión
                      th.texto-left Resultado esperado
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Separar ahorro mensual
                      td.ajuste-border-tabla.texto-left Cumplimiento del ahorro
                      td.ajuste-border-tabla.texto-left Ahorro realizado ÷ ahorro planeado × 100
                      td.texto-left Alcanzar el 100 % del ahorro previsto.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Reducir gastos variables
                      td.ajuste-border-tabla.texto-left Diferencia entre gasto planeado y ejecutado
                      td.ajuste-border-tabla.texto-left Gasto ejecutado - gasto planeado
                      td.texto-left Disminuir los excesos frente al presupuesto.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pagar deudas a tiempo
                      td.ajuste-border-tabla.texto-left Cumplimiento de las fechas de pago
                      td.ajuste-border-tabla.texto-left Revisar comprobantes y fechas de vencimiento
                      td.texto-left Evitar mora, intereses y recargos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Disminuir el saldo de la deuda
                      td.ajuste-border-tabla.texto-left Reducción del saldo pendiente
                      td.ajuste-border-tabla.texto-left Comparar el saldo inicial con el saldo final
                      td.texto-left Reducir progresivamente el valor adeudado.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Controlar los gastos pequeños
                      td.ajuste-border-tabla.texto-left Registro de gastos diarios
                      td.ajuste-border-tabla.texto-left Revisar si se registraron las compras menores
                      td.texto-left Identificar fugas de dinero.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cumplir una meta financiera
                      td.ajuste-border-tabla.texto-left Porcentaje de avance de la meta
                      td.ajuste-border-tabla.texto-left Valor acumulado ÷ valor total de la meta × 100
                      td.texto-left Incrementar el avance en cada periodo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Organizar soportes
                      td.ajuste-border-tabla.texto-left Soportes clasificados
                      td.ajuste-border-tabla.texto-left Verificar recibos, facturas y comprobantes archivados
                      td.texto-left Contar con información confiable para el análisis.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mejorar el saldo disponible
                      td.ajuste-border-tabla.texto-left Variación del saldo final
                      td.ajuste-border-tabla.texto-left Comparar el saldo final de un periodo con otro
                      td.texto-left Aumentar el margen para imprevistos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Evitar nuevas deudas
                      td.ajuste-border-tabla.texto-left Número de obligaciones nuevas
                      td.ajuste-border-tabla.texto-left Revisar si se adquirieron nuevos créditos o cuotas
                      td.texto-left Mantener o reducir el nivel de endeudamiento.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ajustar los gastos de alimentación
                      td.ajuste-border-tabla.texto-left Cumplimiento del límite semanal
                      td.ajuste-border-tabla.texto-left Comparar el gasto semanal con el valor definido
                      td.texto-left Mantener el gasto dentro del límite establecido.
          p.mb-0 Estos indicadores permiten que el seguimiento del plan de mejora sea más claro y verificable. Al medir los avances mediante datos sencillos, la persona puede identificar qué acciones funcionan, cuáles requieren ajustes y qué decisiones conviene mantener.
          Separador
          #t_4_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.8 Ajustes periódicos al plan de mejora
          p Los ajustes periódicos al plan de mejora permiten comprobar si las acciones definidas continúan siendo útiles, realistas y acordes con la situación económica de la persona o del núcleo familiar. Un plan de mejora no debe permanecer igual cuando cambian los ingresos, aumentan los gastos, aparecen nuevas obligaciones, se cumple una meta o surge un imprevisto. Por ello, es necesario revisarlo periódicamente y modificarlo cuando los resultados lo requieran.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t4/img51.png', alt='').m-auto
            .col-xl 
              .row.mb-3
                .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/t1/img5.svg', alt='').m-auto
                .col-xl
                  p.mb-0 En la práctica, ajustar el plan significa analizar qué acciones se cumplieron, cuáles quedaron pendientes, qué dificultades surgieron y qué decisiones deben modificarse para el siguiente periodo. Por ejemplo, si una persona planeó ahorrar $150.000 mensuales, pero durante dos meses solo logró ahorrar $70.000, puede reducir temporalmente el aporte, ampliar el plazo o disminuir algunos gastos variables. Si, por el contrario, supera la meta prevista, puede fortalecer el fondo de emergencia o avanzar en otra meta financiera.
              p.mb-0 Los ajustes también permiten mantener el plan alineado con la realidad. Una familia puede iniciar el mes con un presupuesto estable, pero si aumentan los servicios públicos, disminuye un ingreso variable o aparece un gasto de salud, será necesario reorganizar las prioridades y actualizar el plan.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t4/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo práctico
      .caja-4.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p.mb-0 Sandra elaboró un plan de mejora para reducir los gastos pequeños, ahorrar $100.000 mensuales y pagar puntualmente una cuota de crédito. Al finalizar el primer mes cumplió con el pago de la cuota y logró disminuir algunos gastos, pero solo pudo ahorrar $60.000 debido a un gasto de salud no previsto. En lugar de abandonar la meta, decidió ajustar el plan: mantener el ahorro, reducir temporalmente el aporte a $70.000, crear una categoría para gastos de salud y revisar semanalmente sus gastos variables.  Las siguientes situaciones presentan algunos ajustes que pueden realizarse durante el seguimiento del plan de mejora.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img52.png', alt='').m-auto
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 No se cumplió el ahorro mensual
                  p #[b Dificultad:] el aporte era alto frente al saldo disponible.
                  p #[b Ajuste:] reducir temporalmente el aporte y ampliar el plazo de la meta.
                  p.mb-0 #[b Resultado esperado:] mantener el hábito de ahorro sin afectar el equilibrio del presupuesto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img53.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aumentaron los gastos de servicios públicos
                  p #[b Dificultad:] mayor consumo o incremento en las tarifas.
                  p #[b Ajuste:] modificar el valor presupuestado y aplicar medidas de ahorro en el hogar.
                  p.mb-0 #[b Resultado esperado:] evitar faltantes por valores no previstos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img54.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Se presentó un gasto de salud
                  p #[b Dificultad:] no existía una reserva para este tipo de imprevistos.
                  p #[b Ajuste:] crear una categoría de gastos ocasionales o un fondo de emergencia.
                  p.mb-0 #[b Resultado esperado:] preparar el presupuesto para situaciones similares.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img55.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Se pagó una deuda completamente
                  p #[b Dificultad:] quedó dinero disponible que antes se destinaba a la cuota.
                  p #[b Ajuste:] reasignar ese valor al ahorro, al fondo de emergencia o a una meta prioritaria.
                  p.mb-0 #[b Resultado esperado:] aprovechar mejor el ingreso liberado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img56.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Los gastos pequeños continúan siendo altos
                  p #[b Dificultad:] no se registran todos los consumos diarios.
                  p #[b Ajuste:] sustituir el registro semanal por un registro diario inmediato.
                  p.mb-0 #[b Resultado esperado:] mejorar el control de las fugas de dinero.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img57.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Otros resultados también pueden requerir ajustes para mantener el plan de mejora alineado con la situación financiera y las prioridades de la persona o la familia.
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t4/img58.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img59.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text El ingreso variable fue menor al esperado
                  p #[b Dificultad:] se presupuestó un ingreso que no se recibió.
                  p #[b Ajuste:] elaborar el presupuesto únicamente con ingresos seguros.
                  p.mb-0 #[b Resultado esperado:] reducir el riesgo de faltantes.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img60.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text La meta financiera avanzó más de lo previsto
                  p #[b Dificultad:] hubo un excedente o mayor disciplina de ahorro.
                  p #[b Ajuste:] mantener el aporte o aumentar la meta.
                  p.mb-0 #[b Resultado esperado:] fortalecer la planeación financiera.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img61.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text La acción de mejora no se cumplió
                  p #[b Dificultad:] el responsable, el plazo o los recursos no fueron claros.
                  p #[b Ajuste:] reformular la acción con actividades, fechas y mecanismos de verificación específicos.
                  p.mb-0 #[b Resultado esperado:] facilitar el cumplimiento del compromiso.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img62.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text El saldo disponible continúa siendo bajo
                  p #[b Dificultad:] los gastos y las deudas permanecen cerca del ingreso.
                  p #[b Ajuste:] revisar las prioridades, reducir los gastos aplazables y evitar nuevas deudas.
                  p.mb-0 #[b Resultado esperado:] aumentar el margen para imprevistos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img63.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Cambió una prioridad familiar
                  p #[b Dificultad:] surgió una nueva necesidad importante.
                  p #[b Ajuste:] reorganizar las metas, los gastos y los tiempos del plan.
                  p.mb-0 #[b Resultado esperado:] mantener el presupuesto acorde con la realidad familiar.
          p.mb-5 Esta figura puede representar el proceso continuo de revisión, seguimiento y ajuste de las acciones de mejora del presupuesto personal.
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura .1
                span Ciclo de seguimiento y ajuste del plan de mejora
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t4/img64.svg', alt='Diagrama sobre mejora continua del presupuesto que presenta cinco etapas: aplicar el plan de mejora, revisar avances, identificar dificultades, ajustar acciones y continuar el seguimiento ').m-auto
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              p Los ajustes periódicos permiten que el plan de mejora se mantenga flexible y útil a lo largo del tiempo. Al revisar los avances, modificar las acciones y reorganizar las prioridades, la persona o la familia puede conservar el control del presupuesto, responder mejor a los cambios económicos y fortalecer progresivamente sus decisiones financieras.
              .caja-1(data-aos="zoom-in").mb-3
                .row.align-items-center
                  .col-xl-auto
                    figure
                      img(src='@/assets/curso/temas/t4/img65.jpg', alt='').m-auto
                  .col-xl.caja-1_p
                    p.mb-0 Las acciones de mejora del presupuesto personal permiten transformar el análisis financiero en decisiones prácticas y verificables. A través de ellas, la persona o la familia puede corregir dificultades, prevenir nuevos desequilibrios y fortalecer resultados positivos relacionados con el ahorro, los gastos, las deudas, las metas financieras, los soportes y el saldo disponible. Para que sean efectivas, deben responder a una causa identificada, definir una actividad concreta, establecer un plazo, disponer de los recursos necesarios y contar con un mecanismo sencillo de verificación.
              p.mb-0 El plan de mejora, el seguimiento a los compromisos, los indicadores de avance y los ajustes periódicos contribuyen a mantener el presupuesto actualizado y acorde con la realidad económica personal o familiar. De esta manera, cada revisión facilita comprobar los avances, identificar nuevas dificultades, reformular las acciones y fortalecer progresivamente la administración del dinero.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t4/img66.png', alt='').m-auto
      .caja-5.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t4/img67.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Informe y seguimiento del presupuesto personal
            p.mb-0 Se invita a leer el documento #[b Informe y seguimiento del presupuesto personal], donde se aborda la elaboración, presentación y seguimiento de un informe presupuestal como herramienta para analizar, controlar y mejorar las finanzas personales.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_informe_seguimiento_presupuesto_personal.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema4',
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
