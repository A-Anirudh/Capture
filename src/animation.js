export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: -200,
        x: -100

    },
    show: {
        opacity: 1,
        y: 0,
        x: 0,


        transition: {
            duration: 1,
            when: 'beforeChildren',
            staggerChildren: 0.1

        },
    },
    exit: {
        opacity: 0,
        y: 300,
        x: 100,
        transition: {
            duration: 0.5,
        }
    }
}


export const titleAnimation = {
    hidden: {
        y: -200,
        x: -100
    },
    show: {
        y: 0,
        x: 0,
        transition: {
            duration: 0.75,
            ease: 'easeOut'
        }
    }

}

export const fade = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 0.8
        }
    }
}


export const photoAnimation = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: { duration: 1 }
    }
}


export const lineAnimation = {
    hidden: {
        width: '0%'

    },
    show: {
        width: '100%',
        transition: {
            duration: 1
        }
    }
}