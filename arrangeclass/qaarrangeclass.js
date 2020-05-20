import {contury,classType,uat_teachers,uat_teacherid,qa_teachers,qa_teacherid,stg_teachers,stg_teacherid,ENV, book} from "./base"



describe('Arrange classes on QA', function () {
        var url = "http://10.128.35.81/" + ENV.QA + "/allocate-class"


        it('arrange GL', function () {
            if (contury == "CN")
            {
                book(url,qa_teacherid.AMOBILE,qa_teachers.AMOBILE,classType.CNGL,ENV.QA)
            }
            else
            {
                book(url,qa_teacherid.AMOBILE,qa_teachers.AMOBILE,classType.USGL,ENV.QA)
    
            }
            
        })
    
    
        it('arrange PL20', function () {
    
            if (contury == "CN")
            {
    
                book(url,qa_teacherid.BMOBILE,qa_teacherid.BMOBILE,classType.CNPL20,ENV.QA)
            }
    
            else
            {
                book(url,qa_teacherid.BMOBILE,qa_teacherid.BMOBILE,classType.USPL20,ENV.QA)
            }
    
        })
    
    
        it('arrange PL40', function () {
            if (contury == "CN")
            {
                book(url,qa_teacherid.CMOBILE,qa_teacherid.CMOBILE,classType.CNPL40,ENV.QA)
            }
            else
            {
                book(url,qa_teacherid.CMOBILE,qa_teacherid.CMOBILE,classType.USPL40,ENV.QA)
            }
    
        })
    })