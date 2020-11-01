const fs = require('fs')
const chalk = require('chalk')

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.txt')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.txt', dataJSON)
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find(note => {
        return note.title === title
    })

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green('New note added.'))
    } else {
        console.log(chalk.red(`Note title of "${title}" taken.`))
    }

    saveNotes(notes)
}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter(note => {
        return note.title !== title
    })

    if (notesToKeep.length < notes.length) {
        console.log(chalk.green(`Note with title of "${title}" has been removed.`))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red(`Note with title of "${title}" not found.`))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    if (notes.length > 0) {
        console.log(chalk.blue('Your Notes'))
        notes.forEach(note => {
            console.log(note.title)
        })
    } else {
        console.log(chalk.red('No notes found.'))
    }

}

const readNote = (title) => {
    const notes = loadNotes()

    const note = notes.find(note => {
        return note.title === title
    })

    if (note) {
        console.log(chalk.blue.underline(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red('No note found.'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}