class BMI{
    constructor(height, weight){
        this.height = height
        this.weight = weight
        this.bmi = this.calc()
    }
    calc(){
        const heightM = this.height / 100
        return this.weight / (heightM ** 2)
    }

    print (){
        let res = '普通'
        if(this.bmi >= 25) res = '肥満'
        else if(this.bmi >= 18.5) res = '普通'
        else res = '痩せ'
        console.log('-------------------------------')
        console.log('BMI=', this.bmi)
        console.log('あなたは' + res + '体型です。')
        console.log('-------------------------------')
    }
}
const bmi = new BMI(156,52)
bmi.print()