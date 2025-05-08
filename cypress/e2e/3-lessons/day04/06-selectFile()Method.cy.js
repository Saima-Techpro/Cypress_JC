describe('Action Commands', () => {
    it('Use of selectFile() method', () => {

        cy.visit('https://www.webdriveruniversity.com/File-Upload/index.html');

        // Click on "choose file" button 
        //cy.get('#myFile').selectFile('package.json')

        // Using drag and drop option 

        cy.get('#myFile').selectFile('package.json', {action:"drag-drop"})
    
        
    });
});