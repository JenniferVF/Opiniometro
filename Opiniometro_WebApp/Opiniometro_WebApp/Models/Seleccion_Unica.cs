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
    
    public partial class Seleccion_Unica
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Seleccion_Unica()
        {
            this.Opciones_De_Respuestas_Seleccion_Unica = new HashSet<Opciones_De_Respuestas_Seleccion_Unica>();
        }
    
        public string ItemId { get; set; }
        public Nullable<bool> IsaLikeDislike { get; set; }
    
        public virtual Item Item { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Opciones_De_Respuestas_Seleccion_Unica> Opciones_De_Respuestas_Seleccion_Unica { get; set; }
    }
}
