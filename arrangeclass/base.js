
// const url = "http://10.128.35.81/uat/allocate-class"

var contury = "CN"

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


export function book(url,id,teacher,class_type,currentenv){
    cy.visit(url)
    cy.get(".ant-select-selection__placeholder").first()
    .type(id)
    cy.wait(2000)
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

export {contury,classType,uat_teachers,uat_teacherid,qa_teachers,qa_teacherid,stg_teachers,stg_teacherid,ENV}
