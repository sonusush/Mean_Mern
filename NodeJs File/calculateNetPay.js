 function paysalary(sal)
 {
        var HRA;
        var Grosspay;
        var netpay;
       
        if(sal>50000)
        {
            HRA=((40/100)*sal);
            Grosspay=sal+HRA;
            netpay=Grosspay-1000;
        
        }
        else{
            HRA=((30/100)*sal);
            Grosspay=sal+HRA;
            netpay=Grosspay-1000;


         }

        return netpay;
    }
    module.exports.paysalary=paysalary;