function taxProgram(income){
    let PayeeTax; //This represents monthly net PAYE due to KRA less personal relief.
    let PersonalRelief= 2400; //This is the monthly personal relief for an individual
    let NHIF; //monthly health insurance premiums
    let pension=6000;
    let NSSFDeductions;//6% of pension limit
    let NetSalary;//the net earnings after all deductions
if(income<=24000){
    PayeeTax= 0.1*income-PersonalRelief;
}else if(income>=32333){
    PayeeTax=income*.3-PersonalRelief;
}else{
    PayeeTax=income*0.25-PersonalRelief;
}

if(income<=5999){NHIF=150}
else if(income>=6000 && income<=7999){NHIF=300}
else if(income>=8000 && income<=11999){NHIF=400}
else if(income>=12000 && income<=14999){NHIF=500}
else if(income>=15000 && income<=19999){NHIF=600}
else if(income>=20000 && income<=24999){NHIF=750}
else if(income>=25000 && income<=29999){NHIF=850}
else if(income>=30000 && income<=34999){NHIF=900}
else if(income>=35000 && income<=39999){NHIF=950}
else if(income>=40000 && income<=44999){NHIF=1000}
else if(income>=45000 && income<=49999){NHIF=1100}
else if(income>=50000 && income<=59999){NHIF=1200}
else if(income>=60000 && income<=69999){NHIF=1300}
else if(income>=70000 && income<=69999){NHIF=1400}
else if(income>=80000 && income<=89999){NHIF=1500}
else if(income>=90000 && income<=99999){NHIF=1600}
else if(income>=100000){NHIF=1700}

if (6000<=pension){NSSFDeductions=0.06* pension;}
else if (pension>=6001 && pension<=18000){NSSFDeductions= 0.06*pension;}


NetSalary=income-PayeeTax-NHIF-NSSFDeductions

return  {PayeeTax, //Return the calculated Payee tax.
        NHIF, //Return based on income range
        NSSFDeductions,
        NetSalary, //Based on the deductions above.
}
}

console.log(taxProgram(40000))