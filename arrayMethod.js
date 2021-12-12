function evenOrOddChecker(a){
    if(a%2 === 0){
        return 'Even'
    }    
    else{
        return 'Odd'
    }
}

console.log(evenOrOddChecker(30))

const companies = [
    {   name: 'Company One',
        category: 'Finance',
        start: 1981,
        end: 2003
    },
    {   name: 'Company Two',
        category: 'Retail',
        start: 1992,
        end: 2008
    },
    {   name: 'Company Three',
        category: 'Auto',
        start: 1999,
        end: 2007
    },
    {   name: 'Company Four',
        category: 'Retail',
        start: 1989,
        end: 2010
    },
    {   name: 'Company Five',
        category: 'Technology',
        start: 2009,
        end: 2014
    },
    {   name: 'Company Six',
        category: 'Finance',
        start: 1987,
        end: 2010
    },
    {   name: 'Company Seven',
        category: 'Auto',
        start: 1986,
        end: 1996
    },
    {   name: 'Company Eight',
        category: 'Technology',
        start: 2011,
        end: 2016
    },
    {   name: 'Company Nine',
        category: 'Retail',
        start: 1981,
        end: 1989
    }
]

const age = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// ********forEach()*********

/*
for(let i = 0; i<companies.length; i++){
    console.log(companies[i])
}
*/
companies.forEach(
    function(company){ 
        console.log(company.name)
    }
)

//   *******filter()*********
/*
let getDrivingLicense = []
for(let i=0; i<age.length; i++){
    if(age[i] >= 18){
        getDrivingLicense.push(age[i])
    }
}

const getDrivingLicense = age.filter((age)=> age>= 18) // Using arrow function
*/


const getDrivingLicense = age.filter(
    function(requiredAge){
        if(requiredAge >= 18){  // Instead of writing the if statement, we can directly use "return requiredAge >= 18"
            return true
        }
    }
)
console.log(getDrivingLicense)

// filter retail companies
const retailCompanies = companies.filter(
    function(retailCo){
        if(retailCo.category === 'Retail'){
            return true
        }
    }
)
console.log(retailCompanies)

/*  //Using Arrow function
const retailCompanies = companies.filter((retailCo)=> retailCo.category === 'Retail')
console.log(retailCompanies)
*/

// Get 80s companies

const companiesOf80s = companies.filter(
    function(estdYear){
        if(estdYear.start >= 1980 && estdYear.start < 1990){
            return true
        }
    }
)

console.log(companiesOf80s)

// Companies that lasted for 10 years or more
const companiesLifeSpan = companies.filter(
    function(runningTime){
        if(runningTime.end - runningTime.start >= 10){
            return true
        }
    }
)

console.log(companiesLifeSpan)

// **********map()***********

//create array of company names

const companyNames = companies.map(
    function(arrayOfCompanyNames){
        return arrayOfCompanyNames.name
    }
)
console.log(companyNames)

const testMap = companies.map(
    function(company){
        return `${company.name} (${company.start} - ${company.end})`
    }
)

console.log(testMap)


const getAgeSquare = age.map(
    function(square){
        return square ** 2
    }
) 

console.log(getAgeSquare)

const getSquareRoot = age.map(
    function(sqRoot){
        return Math.sqrt(sqRoot)
    }
)
console.log(getSquareRoot)

// *********Sort()***********
// Sort companies by start year
const sortedCompanies = companies.sort(
    function(company1, company2){
        if(company1.start > company2.start){
            return 1
        } else {
            return -1
        }
    }
)

console.log(sortedCompanies)

// Sort Age
/*
const sortedAge = age.sort(
    function(a, b){
        if(a > b){
            return 1
        } else{
            return -1
        }
    }
)
*/
const sortedAge = age.sort((a,b) => (b-a))  // to arrange it in ascending order, use 'a-b'

console.log(sortedAge)

// *********Reduce()***********
/*
let ageSum = 0
for(let i=0; i<age.length; i++){
    ageSum += age[i]
}
console.log(ageSum)
*/
const ageSum = age.reduce(
    function(total, age){
        return total + age
    }, 0
)
console.log(ageSum)

// Get total running time for all companies

const totalYears = companies.reduce(
    function(total, lifeSpan){
        return total + (lifeSpan.end - lifeSpan.start)
    }, 0
)

/*
const totalYears = companies.reduce((total, lifeSpan) =>        total + (lifeSpan.end - lifeSpan.start), 0)
*/

console.log(totalYears)

// Combine Methods

const combined = age.map(
    function(age){
        return age*2
    }
).filter(
    function(olderThan40){
        if(olderThan40 >= 40 ){
            return true
        }
    }
).sort(
    function(a,b){
        return a-b
    }
).reduce(
    function(sum, age){
        return sum + age
    }, 0
)

console.log(combined)