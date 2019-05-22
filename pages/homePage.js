import {Selector, t} from 'testcafe'


class HomePage {
    constructor(){
        this.topIcons = Selector('#top_icons')
        this.addTask = Selector('.agenda_add_task')
        this.addingDate= Selector('.input_due_date')
        this.selectionMonth = Selector('.scheduler-picker-header-action').nth(2)
        this.selectDay= Selector('.scheduler-picker-cell-day').withText('10')
        //this.selectInput = Selector('.sel_richtext_editor')
        this.writting = Selector('.sel_richtext_editor')
        this.bntAddTask = Selector('.ist_button_red')
        this.btnInbox = Selector('.item_content').child(0);
        //this.test= Selector('.text sel_item_content').withText('Hola mundo 3!!')
        //this.allTasks = Selector('#filter_inbox')
        //this.nameTask =Selector('.sel_item_content')
        this.selectTask= Selector('.sel_item_content')
        this.selectDeleted = Selector('.checker')
      
    }

    addTaskFlow = async() => {
        await t
        .click(this.addTask)
        .click(this.addingDate)
        .click(this.selectionMonth)
        .click(this.selectDay)
        //.Click(this.writting)
        .typeText(this.writting, 'TU NOMBRE')
        //.pressKey(this.writting, 'enter')
        .click(this.bntAddTask)
        .wait(1000)
        //.navigateTo('https://todoist.com/app?lang=es&r=1558487632038#project%2F2210673149')
        .click(this.btnInbox)
        .click(this.selectTask)
        .typeText(this.writting, 'Tocayoooo')
        .click(this.bntAddTask)
        .wait(1000)
       .click(this.selectDeleted)
    }
}
    


export default new HomePage()