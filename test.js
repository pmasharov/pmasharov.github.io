var tahoe = {
    resorts: ['Kirkwood', 'Squaw', 'Alpine'],
    print:  (delay = 1000) => {
        // debugger
        setTimeout(() => console.log(this.resorts.join(',')), delay)
    }
}
tahoe.print();