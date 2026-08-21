<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Análisis y mejora del presupuesto personal',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los conceptos y procedimientos necesarios para analizar resultados, tomar decisiones y formular acciones de mejora del presupuesto personal.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Al finalizar el mes, una persona compara el presupuesto planeado con el ejecutado y observa que recibió los ingresos previstos, pero su saldo disponible fue menor al esperado. ¿Cuál sería la primera acción más adecuada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumentar el valor de las metas financieras sin revisar los gastos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar todos los gastos variables del siguiente presupuesto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Registrar el saldo menor como una pérdida sin hacer ajustes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Revisar las diferencias entre gastos planeados y ejecutados para identificar la causa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Primero se deben identificar las causas de la diferencia antes de decidir ajustes.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Una familia planeó ahorrar $150.000, pero al cierre del periodo solo separó $60.000. ¿Qué interpretación es más adecuada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La meta de ahorro se cumplió porque hubo algún valor reservado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El presupuesto no debe modificarse porque sí existió ahorro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La meta tuvo avance parcial y requiere revisar gastos o ajustar el valor planeado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El ahorro debe eliminarse del presupuesto del siguiente mes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Hubo avance, pero no se cumplió totalmente la meta prevista.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Si una persona paga $700.000 en deudas y recibe ingresos mensuales por $2.000.000, ¿qué indicador puede analizar con esta información?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Capacidad de ahorro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Nivel de endeudamiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cumplimiento de metas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Variación de ingresos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Se compara el valor de las cuotas con el ingreso total.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Un presupuesto muestra ingresos por $2.300.000 y salidas por $2.250.000. Aunque el saldo es positivo, la persona no tiene fondo de emergencia ni ahorro. ¿Qué decisión sería más prudente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Asumir una nueva cuota porque el saldo final fue positivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ignorar el ahorro porque las obligaciones fueron pagadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Usar el saldo completo en compras aplazables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Destinar parte del saldo a una reserva antes de nuevos gastos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Un saldo positivo puede fortalecer el ahorro o la prevención de imprevistos.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál situación refleja mejor una falta de liquidez personal?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La persona tiene ingresos altos, pero poco dinero disponible después de pagar obligaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La persona compara sus gastos con el mes anterior.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La persona registra sus ingresos variables cuando los recibe.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La persona tiene una meta financiera con plazo definido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La liquidez depende del dinero realmente disponible para compromisos inmediatos.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Una persona identifica que sus gastos pequeños aumentan cada semana, pero no conserva registros diarios. ¿Qué acción de mejora es más adecuada?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumentar el presupuesto de todos los gastos sin revisar consumos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registrar las compras menores al momento de realizarlas y fijar un límite semanal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar el análisis de gastos variables del presupuesto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usar crédito para cubrir los gastos pequeños.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta El registro diario permite controlar gastos repetidos y poco visibles.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál opción representa una acción de mejora correctamente formulada?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar el manejo del dinero el próximo mes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gastar menos en alimentación cuando sea posible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Separar $100.000 para ahorro el día que se reciba el ingreso y verificarlo con comprobante.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Revisar el presupuesto algún día del mes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La acción tiene valor, momento y forma de verificación.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Una persona planeó gastar $300.000 en alimentación, pero gastó $420.000. Al revisar, encuentra compras sin lista y domicilios frecuentes. ¿Qué ajuste sería más coherente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Formular una acción sobre lista de mercado, límite semanal y reducción de domicilios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentar la deuda para cubrir alimentación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar la alimentación del presupuesto porque varía mucho.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registrar el exceso sin modificar hábitos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El ajuste debe responder a la causa identificada.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué diferencia hay entre una acción correctiva y una preventiva?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No existe diferencia porque ambas se aplican igual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La correctiva elimina el presupuesto; la preventiva reemplaza los soportes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La correctiva solo se usa cuando hay excedente; la preventiva solo cuando hay ahorro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La correctiva se aplica ante una dificultad presentada; la preventiva busca evitar que ocurra o se repita.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta Cada tipo de acción responde a un momento distinto del problema.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Una persona recibe un ingreso variable que no siempre llega en la misma fecha. ¿Cuál decisión reduce el riesgo de faltantes?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Presupuestar gastos fijos con base en ingresos no confirmados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comprometer el ingreso variable antes de recibirlo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Elaborar el presupuesto con ingresos seguros y registrar los variables cuando se reciban.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Usar los ingresos variables únicamente para aumentar deudas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Los ingresos inciertos no deben comprometer gastos obligatorios.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el propósito principal de un plan de mejora del presupuesto personal?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Convertir las acciones de mejora en actividades con responsables, tiempos y verificación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reemplazar el presupuesto mensual por una lista de compras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar únicamente el saldo final del periodo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar comparar lo planeado con lo ejecutado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta El plan organiza cómo se aplicarán y revisarán las mejoras.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'En el seguimiento a compromisos financieros, una familia observa que cumplió el ahorro, pero no redujo los gastos de mercado. ¿Qué debería hacer?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar el ahorro porque no se cumplió todo el plan.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Conservar el ahorro y ajustar la acción relacionada con mercado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Suspender el seguimiento hasta el siguiente año.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Considerar que el plan falló por completo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El seguimiento permite mantener avances y ajustar dificultades.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál indicador permite medir el avance de una meta financiera?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ingreso mensual dividido entre número de recibos guardados',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Saldo disponible menos valor de la meta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gastos variables divididos entre gastos fijos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Valor acumulado dividido entre el valor total de la meta, multiplicado por 100.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Este cálculo muestra el porcentaje de avance frente a la meta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Una persona terminó de pagar una deuda mensual de $180.000. ¿Qué ajuste sería más recomendable para el siguiente presupuesto?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Dejar ese dinero sin asignación para gastarlo libremente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reasignar el valor liberado a ahorro, fondo de emergencia o meta prioritaria.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Adquirir otra deuda inmediatamente por el mismo valor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar el seguimiento de deudas del presupuesto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El ingreso liberado puede fortalecer la estabilidad financiera.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Cuál es la función de un informe presupuestal personal?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Presentar de forma organizada resultados, causas, decisiones y acciones de mejora.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituir los soportes financieros por opiniones personales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar únicamente los gastos de mayor valor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar la revisión de metas y deudas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El informe resume resultados y orienta decisiones futuras.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Si el informe muestra que durante tres meses el transporte supera lo planeado, ¿qué utilidad tiene esa información?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Indica que el presupuesto debe dejar de revisarse.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Demuestra que todos los gastos variables deben eliminarse.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permite reconocer un comportamiento repetido que requiere una acción de mejora.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Confirma que el saldo disponible no importa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La repetición del resultado ayuda a identificar una causa persistente.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál opción corresponde a una redacción clara de un hallazgo presupuestal?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se gastó mucho dinero este mes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hay que mejorar varios gastos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El gasto en transporte superó lo planeado en $70.000 por desplazamientos no organizados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El presupuesto quedó regular.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta.  El hallazgo presenta valor, concepto y causa probable.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuándo es más útil presentar resultados mediante un gráfico circular?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cuando se quiere mostrar la distribución del ingreso entre gastos, deudas y ahorro.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Cuando se necesita escribir una explicación extensa del informe.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuando no existen datos numéricos para comparar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuando se desea reemplazar las acciones de mejora.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El gráfico circular ayuda a visualizar proporciones del presupuesto.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Una acción de mejora no se cumplió porque nadie tenía claro quién debía realizarla ni cuándo. ¿Qué ajuste corresponde?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la acción del plan sin revisarla.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reformular la acción con responsable, fecha y forma de verificación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Registrar el incumplimiento como ahorro no ejecutado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar todos los ingresos del presupuesto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta.  Una acción debe tener responsable, plazo y seguimiento.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál afirmación resume mejor el análisis y mejora del presupuesto personal?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Consiste en registrar cifras sin revisar causas ni decisiones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se limita a calcular el ingreso mensual disponible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permite comprobar resultados, interpretar causas, tomar decisiones y hacer seguimiento a mejoras.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Se aplica solo cuando una persona tiene deudas bancarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Integra comprobación, análisis, decisiones, acciones de mejora e informe.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
