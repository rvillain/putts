export class Course { constructor(){
        this.id = 0;
        this.holes = [];
        this.par = 36;
        this.name = 'Mon parcours';
        for(var i: number = 0; i < 18; i++) {
            this.holes[i] = new Hole();
            this.holes[i].name = "Trou n°" + (i+1);
            this.holes[i].par = 2;
        }
    }
    id: number;
    name: string;
    holes: Hole[];
    par: number;
}

export class Hole{ constructor(){
    this.id = 0;
    this.name = 'hole';
    this.par = 2;
    this.segments = [];
        for(var i: number = 0; i < 8; i++) {
            this.segments[i] = [];
            for(var j: number = 0; j< 8; j++) {
                this.segments[i][j] = new Segment();
            }
        }
    };   
    id: number;
    name: string;
    par: number;
    segments: Segment[][];
}

export class Segment { constructor(){
        this.orientation = 0;
        this.altitude = 0;
        this.isStart = false;
    }
    name: string | undefined;
    orientation: number;
    altitude: number;
    isStart: boolean;
}