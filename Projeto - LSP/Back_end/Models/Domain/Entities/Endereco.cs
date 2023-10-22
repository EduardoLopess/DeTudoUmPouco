using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Back_end.Models.Domain.Entities
{
    public class Endereco
    {
        public int Id { get; set; }
        public string Rua { get; set; }
        public string Bairro { get; set; }
        public string Complemento { get; set; }
        public int CEP { get; set; }
        public string Cidade { get; set; }

        public int InstitutoId { get; set; }        
        public Instituto Instituto { get; set; }
        public PontoDoacao PontoDoacao { get; set; }
        public int PontoDoacaoId { get; set; }
    }
}