
  //add static methods here
  class Formatter {
    static capitalize(word){
      return word[0].toUpperCase() + word.split("").slice(1).join("")
    }
    static sanitize(word){
      return word.replace(/[^'\w\s]/g,"")
    }
    static titleize(str){
      return str.map(word => {
          if(word === "the" ||word === "a" ||word === "an" ||word === "but" ||word === "of" ||word === "and" ||word === "for" ||word === "at" ||word === "by" ||word === "from" ) return word
          return word[0].toUpperCase() + word.split("").slice(1).join("")
      })
    }
  }
