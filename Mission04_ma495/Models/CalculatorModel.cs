using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_ma495.Models
{
    public class CalculatorModel
    {
        [Range(0, 100,
            ErrorMessage = "Please enter a number between 0 and 100")]
        public int a { get; set; }

        [Range(0, 100,
            ErrorMessage = "Please enter a number between 0 and 100")]
        public int gp { get; set; }

        [Range(0, 100,
            ErrorMessage = "Please enter a number between 0 and 100")]
        public int q { get; set; }

        [Range(0, 100,
            ErrorMessage = "Please enter a number between 0 and 100")]
        public int me { get; set; }

        [Range(0, 100,
            ErrorMessage = "Please enter a number between 0 and 100")]
        public int fe { get; set; }

        [Range(0, 100,
            ErrorMessage = "Please enter a number between 0 and 100")]
        public int i { get; set; }
    }
}
