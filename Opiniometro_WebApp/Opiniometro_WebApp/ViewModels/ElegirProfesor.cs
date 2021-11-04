using Opiniometro_WebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Opiniometro_WebApp.ViewModels
{
    public class ElegirProfesor
    {

        // Atributo que salva si un formulario se encuentra seleccionado o no:
        public string Nombre { get; set; }

        public string Apellido1 { get; set; }
        public string Apellido2 { get; set; }

        public ElegirProfesor() {        
        }

    }

}
