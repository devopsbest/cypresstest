
// const url = "http://10.128.35.81/uat/allocate-class"
const envs = "QA"
const contury = "CN"

var classType = {
    CNPL40: "PL-General-EvcCN1 for PL40, EFTV",
    CNPL20: "PL-General-EvcCN1 for PL20, OSA, KPL, KPLDemo",
    CNGL: "GL-General-EvcCN1 for all levels",
    USPL40: "PL-General-EvcUS1 for PL40, EFTV, Aviation",
    USPL20: "PL-General-EvcUS1 for PL20, OSA",
    USGL: "GL-General-EvcUS1 for all levels",
};

var uat_teachers= {
    AMOBILE:"AUAT Mobile(23788715)",
    BMOBILE:"BUAT Mobile(23788716)",
    CMOBILE: "CUAT Mobile(23788717)",
    DMOBILE: "DUAT Mobile(23788718)",
    LEFEC: "Landy EFEC(23740960)",
    DEFEC: "Dave EFEC(23740959)",
    
};
var uat_teacherid = {
    AMOBILE: "23788715",
    BMOBILE: "23788716",
    CMOBILE: "23788717",
    DMOBILE: "23788718",
    LEFEC: "23740960",
    DEFEC: "23740959",

};

var qa_teachers= {
    AMOBILE: "AQA Mobile(10708789)",
    BMOBILE: "BQA Mobile(10708791)",
    CMOBILE: "CQA Mobile(10708792)",
};
var qa_teacherid = {
    AMOBILE: "10708789",
    BMOBILE: "10708791",
    CMOBILE: "10708792",
};

var stg_teachers= {
    AMOBILE: "A Mobile(14830955)",
    BMOBILE: "B Mobile(14830956)",
    CMOBILE: "C Mobile(14830957)",
};
var stg_teacherid = {
    AMOBILE: "14830955",
    BMOBILE: "14830956",
    CMOBILE: "14830957",
};

var ENV ={
    UAT: "UAT",
    QA: "QA",
    STG: "STAGING",
}


function book(url,id,teacher,class_type,currentenv){
    cy.visit(url)
    
    if (currentenv == ENV.UAT)

    {


        cy.get('[title="UAT"]').click()
    }
    else if (currentenv == ENV.QA)
    {  

        cy.get('[title="QA"]').click()
    }
    else if (currentenv == ENV.STG)
    {  

        cy.get('[title="STAGING"]').click()
    }

    
    cy.get(".ant-select-selection__placeholder").first()
    .type(id)
    cy.wait(100)
    cy.contains(teacher).click()
    cy.get('[class="ant-select ant-select-enabled"]').last()
    .click()
    cy.contains(class_type).click()
    cy.get('.ant-btn.ant-btn-primary').click()

    if (class_type == classType.CNPL20)
    {

        for( var i =1; i<=10; i++){
            cy.contains("+30 mins").click()
            cy.wait(100)
            cy.get('.ant-btn.ant-btn-primary').click()
        }
    }
    else{
        for( var i =1; i<=10; i++){
            cy.contains("+30 mins").click()
            cy.wait(100)
            cy.contains("+30 mins").click()
            cy.get('.ant-btn.ant-btn-primary').click()
        }

    }

}



describe('Arrange classes on UAT', function () {
    before
    {
        var url = "http://10.128.35.81/" + `${ENV.UAT}` + "/allocate-class"
    }


    it('arrange GL', function () {
            if (contury == "CN")
            {
                book(url,uat_teacherid.CMOBILE,uat_teachers.CMOBILE,classType.CNGL,ENV.UAT)
            }
            else
            {
                book(url,uat_teacherid.CMOBILE,uat_teachers.CMOBILE,classType.USGL,ENV.UAT)
    
            }
            
        })
    
        it('arrange GL', function () {
            if (contury == "CN")
            { 
                book(url,uat_teacherid.DMOBILE,uat_teachers.DMOBILE,classType.CNGL,ENV.UAT)
            }
            else{
                book(url,uat_teacherid.DMOBILE,uat_teachers.DMOBILE,classType.USGL,ENV.UAT)
            }
    
        })
    
        it('arrange PL20', function () {
    
            if (contury == "CN")
            {
    
                book(url,uat_teacherid.DEFEC,uat_teachers.DEFEC,classType.CNPL20,ENV.UAT)
            }
    
            else
            {
                book(url,uat_teacherid.DEFEC,uat_teachers.DEFEC,classType.USPL20,ENV.UAT)
            }
    
        })
    
    
        it('arrange PL40', function () {
            if (contury == "CN")
            {
                book(url,uat_teacherid.LEFEC,uat_teachers.LEFEC,classType.CNPL40,ENV.UAT)
            }
            else
            {
                book(url,uat_teacherid.LEFEC,uat_teachers.LEFEC,classType.USPL40,ENV.UAT)
            }
    
        })
    })
    
    


describe('Arrange classes on QA', function () {
        var url = "http://10.128.35.81/" + `${ENV.QA}` + "/allocate-class"


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
    
describe('Arrange classes on STAGING', function () {
    before
    {
        var url = "http://10.128.35.81/" + `${ENV.STG}` + "/allocate-class"

    }

        it('arrange GL', function () {
            if (contury == "CN")
            {
                book(url,stg_teacherid.AMOBILE,stg_teachers.AMOBILE,classType.CNGL,ENV.STG)
            }
            else
            {
                book(url,stg_teacherid.AMOBILE,stg_teachers.AMOBILE,classType.USGL,ENV.STG)
    
            }
            
        })
    
    
        it('arrange PL20', function () {
    
            if (contury == "CN")
            {
    
                book(url,stg_teacherid.BMOBILE,stg_teacherid.BMOBILE,classType.CNPL20,ENV.STG)
            }
    
            else
            {
                book(url,stg_teacherid.BMOBILE,stg_teacherid.BMOBILE,classType.USPL20,ENV.STG)
            }
    
        })
    
    
        it('arrange PL40', function () {
            if (contury == "CN")
            {
                book(url,stg_teacherid.CMOBILE,stg_teacherid.CMOBILE,classType.CNPL40,ENV.STG)
            }
            else
            {
                book(url,stg_teacherid.CMOBILE,stg_teacherid.CMOBILE,classType.USPL40,ENV.STG)
            }
    
        })
    })
