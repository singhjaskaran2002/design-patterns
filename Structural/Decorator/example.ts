// we have a class Mobile which plays FM by default
// as per new requirements we need to add more functionalities into the mobile device such as play Video and Music as well.
// we will use decorator pattern here to get solution for this problem.

// Solution 1: We can add these functionalities into the main class. 
// But this is not feasible as other childs of this class may not have supported hardware

// The base class that represents a mobile device
class Mobile {
    // The name of the mobile device
    constructor(private name: string) { }

    // Plays FM on the mobile device
    playFM() {
        console.log(`FM started on device ${this.name}!`);
    }

    // Returns the name of the mobile device
    get mobileName() {
        return this.name;
    }
}

// A decorator class that adds the functionality of playing music to a mobile device
class WithPlayMusic extends Mobile {
    constructor(private mobile: Mobile) {
        super(mobile.mobileName);
    }

    // Plays music on the mobile device
    playMusic() {
        console.log(`Music has been started on ${this.mobile.mobileName}`);
    }
}

// A decorator class that adds the functionality of playing video to a mobile device
class WithPlayVideo extends Mobile {
    constructor(private mobile: Mobile) {
        super(mobile.mobileName);
    }

    // Plays video on the mobile device
    playVideo() {
        console.log(`Video has been started on ${this.mobile.mobileName}`);
    }
}

// Create two new Mobile instances named mobileX and mobileY
const mobileX = new Mobile('MobileX');
const mobileY = new Mobile('MobileY');

// Decorate mobileX with the functionality of playing music using the WithPlayMusic decorator class
const decoratedWithPlayMusic = new WithPlayMusic(mobileX);

// Decorate mobileY with the functionality of playing video using the WithPlayVideo decorator class
const decoratedWithPlayVideo = new WithPlayVideo(mobileY);

// Play FM on the mobileX and mobileY instances
mobileX.playFM();
mobileY.playFM();

// Play music on the decorated mobileX instance that has the functionality of playing music
decoratedWithPlayMusic.playMusic();

// Play video on the decorated mobileY instance that has the functionality of playing video
decoratedWithPlayVideo.playVideo();

/******************************************
    OUTPUT:

    FM started on device MobileX!
    FM started on device MobileY!
    Music has been started on MobileX
    Video has been started on MobileY
*******************************************/