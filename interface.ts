interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    //startTrial: () => string
    startTrial(): string,
    getCoupon(couponName: string):number
}

interface User {
    gitHubToken: string 
}

const sinclair: User = {dbId: 22,email: "sss", userId: 2211,
    gitHubToken: "weed",
    startTrial:() => {
        return "tri"
    },
    getCoupon:(sde) => {
        return 234
    }
}

sinclair.email = "h@h.com"
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

