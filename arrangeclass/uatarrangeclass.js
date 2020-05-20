import * as test from "./base"

describe('Arrange classes on UAT', function () {
    before
    {
        var url = "http://10.128.35.81/" + test.ENV.UAT + "/allocate-class"
    }


    it('arrange GL', function () {
            if (test.contury == "CN")
            {
                test.book(url,test.uat_teacherid.CMOBILE,test.uat_teachers.CMOBILE,test.classType.CNGL,test.ENV.UAT)
            }
            else
            {
                test.book(url,test.uat_teacherid.CMOBILE,test.uat_teachers.CMOBILE,test.classType.USGL,test.ENV.UAT)
    
            }
            
        })
    
        it('arrange GL', function () {
            if (test.contury == "CN")
            { 
                test.book(url,test.uat_teacherid.DMOBILE,test.uat_teachers.DMOBILE,test.classType.CNGL,test.ENV.UAT)
            }
            else{
                test.book(url,test.uat_teacherid.DMOBILE,test.uat_teachers.DMOBILE,test.classType.USGL,test.ENV.UAT)
            }
    
        })
    
        it('arrange PL20', function () {
    
            if (test.contury == "CN")
            {
    
                test.book(url,test.uat_teacherid.DEFEC,test.uat_teachers.DEFEC,test.classType.CNPL20,test.ENV.UAT)
            }
    
            else
            {
                test.book(url,test.uat_teacherid.DEFEC,test.uat_teachers.DEFEC,test.classType.USPL20,test.ENV.UAT)
            }
    
        })
    
    
        it('arrange PL40', function () {
            if (test.contury == "CN")
            {
                test.book(url,test.uat_teacherid.LEFEC,test.uat_teachers.LEFEC,test.classType.CNPL40,test.ENV.UAT)
            }
            else
            {
                test.book(url,test.uat_teacherid.LEFEC,test.uat_teachers.LEFEC,test.classType.USPL40,test.ENV.UAT)
            }
    
        })
    })