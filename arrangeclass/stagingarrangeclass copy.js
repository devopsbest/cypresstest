


import * as test from "./base"
    
describe('Arrange classes on STAGING', function () {
    before
    {
        var url = "http://10.128.35.81/" + `${test.ENV.STG}` + "/allocate-class"

    }

        it('arrange GL', function () {
            if (test.contury == "CN")
            {
                test.book(url,test.stg_teacherid.AMOBILE,test.stg_teachers.AMOBILE,test.classType.CNGL,test.ENV.STG)
            }
            else
            {
                test.book(url,test.stg_teacherid.AMOBILE,test.stg_teachers.AMOBILE,test.classType.USGL,test.ENV.STG)
    
            }
            
        })
    
    
        it('arrange PL20', function () {
    
            if (test.contury == "CN")
            {
    
                test.book(url,test.stg_teacherid.BMOBILE,test.stg_teacherid.BMOBILE,test.classType.CNPL20,test.ENV.STG)
            }
    
            else
            {
                test.book(url,test.stg_teacherid.BMOBILE,test.stg_teacherid.BMOBILE,test.classType.USPL20,test.ENV.STG)
            }
    
        })
    
    
        it('arrange PL40', function () {
            if (test.contury == "CN")
            {
                test.book(url,test.stg_teacherid.CMOBILE,test.stg_teacherid.CMOBILE,test.classType.CNPL40,test.ENV.STG)
            }
            else
            {
                test.book(url,test.stg_teacherid.CMOBILE,test.stg_teacherid.CMOBILE,test.classType.USPL40,test.ENV.STG)
            }
    
        })
    })