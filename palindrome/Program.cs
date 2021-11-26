using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace palindrome
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("masukkan kata yang ingin anda check: ");
            string kata = Console.ReadLine();
            char[] nameArray = kata.ToCharArray();
            Array.Reverse(nameArray);
            string kebalikan = new string(nameArray);
            if (kata.Equals(kebalikan, StringComparison.OrdinalIgnoreCase))
            {
                Console.WriteLine($"{kata} adalah Palindrome");
            }
            else
            {
                Console.WriteLine($"{kata} bukan Palindrome");
            }

            Console.ReadKey();

        }
    }
}
