// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T'). (parameters? elements?)

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U'). (substitution- T for U somewhere)

// Create a function which translates a given DNA STRING into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

//Solution:

function DNAtoRNA(dna) {
   let dnaArr = dna.split('')
    let rnaArr = dnaArr.map(e => e === 'T' ? e = 'U' : e)
    let answer = rnaArr.join('')
    return answer
  }

  DNAtoRNA('GCAT')

  //Refactored
  function DNAtoRNA(dna) {
    return dna.split('').map(e => e === 'T' ? e = 'U' : e).join('')
   }
 
   DNAtoRNA('GCAT')

  //or

   function DNAtoRNA(dna) {
    return dna.split("T").join("U");
  }