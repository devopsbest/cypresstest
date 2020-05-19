
const url = "http://10.128.35.81/uat/allocate-class"

var classType = {
    CNPL40: "PL-General-EvcCN1 for PL40, EFTV",
    CNPL20: "PL-General-EvcCN1 for PL20, OSA, KPL, KPLDemo",
    CNGL: "GL-General-EvcCN1 for all levels",
};

var teachers= {
    CMOBILE: "CUAT Mobile(23788717)",
    DMOBILE: "DUAT Mobile(23788718)",
    LEFEC: "Landy EFEC(23740960)",
    DEFEC: "Dave EFEC(23740959)",
    
};
var teacherid = {
    CMOBILE: "23788717",
    DMOBILE: "23788718",
    LEFEC: "23740960",
    DEFEC: "23740959",

};


function book(id,teacher,class_type){

    cy.visit(url)
    cy.get('[title="UAT"]').click()
    cy.get(".ant-select-selection__placeholder").first()
    .type(id)
    cy.wait(100)
    cy.contains(teacher).click()
    cy.get('[class="ant-select ant-select-enabled"]').last()
    .click()
    cy.contains(class_type).click()
    cy.get('.ant-btn.ant-btn-primary').click()

    for( var i =1; i<=10; i++){
        cy.contains("+30 mins").click()
        cy.wait(100)
        cy.contains("+30 mins").click()
        cy.get('.ant-btn.ant-btn-primary').click()
    }


}



describe('Arrange classes', function () {
    it('arrange GL', function () {
        book(teacherid.CMOBILE,teachers.CMOBILE,classType.CNGL)
    })

    it('arrange GL', function () {
        book(teacherid.DMOBILE,teachers.DMOBILE,classType.CNGL)
    })

    it('arrange PL20', function () {
        book(teacherid.DEFEC,teachers.DEFEC,classType.CNPL20)
    })


    it('arrange PL40', function () {
        book(teacherid.LEFEC,teachers.LEFEC,classType.CNPL40)
    })
})

