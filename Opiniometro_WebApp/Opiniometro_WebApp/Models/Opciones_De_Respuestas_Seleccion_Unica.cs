//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Opiniometro_WebApp.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Opciones_De_Respuestas_Seleccion_Unica
    {
        public string ItemId { get; set; }
        public short Orden { get; set; }
        public string OpcionRespuesta { get; set; }
    
        public virtual Seleccion_Unica Seleccion_Unica { get; set; }
    }
}
