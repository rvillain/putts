import { Component, OnInit } from '@angular/core';
import { Course, Hole } from '../../model';
import { Http } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';

declare var  AFRAME: any;

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    public ballContainer: any;
    public courseContainer: any;
    public colors: any;
    public score: number = 0;
    public pars: number[] = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    public scores: number[] = [];
    public currentHole: Hole | undefined;
    public course: Course | undefined;

    constructor(private http: Http){
    }

    ngOnInit(): void {
        this.ballContainer = document.querySelector("#container");
        this.courseContainer = document.querySelector("#course-container");
        this.colors = ["red", "orange", "yellow", "green", "blue", "purple", "hotpink"];
        this.loadCourse();
    }

    startGame(){
        this.scores = [0];
        this.score = 0;
        if(this.course){
            this.currentHole = this.course.holes[0];
        }
        this.updateScoreText();
    }

    ballIn(){
        // if(this.currentHole){

        // }
        // else{
        //     this.currentHole++;
        //     this.scores.push(0);
        //     this.updateScoreText();
        // }
    }

    ballHit(){
        // this.scores[this.currentHole - 1] ++;
        // this.score ++;
        // this.updateScoreText();
    }
    
    updateScoreText(){
        let scoreEl: any = document.getElementById('score');
        scoreEl.setAttribute('value', 'Score: ' + this.score);
    }

    loadCourse(){

        let x = -10;
        let y = 0;
        let z = -15;
        this.http.get("/course.json").subscribe(rep=>{
            this.course = rep.json();
            this.startGame();
            if(this.course){
                for(let hole of this.course.holes){
                    let i = 0;
                    for(let segTab of hole.segments) {
                        if(segTab){
                            let j = 0;
                            for( let seg of segTab) {
                                if(seg.name){
                                    let segX = x + j*3;
                                    let segZ = z + i*3;
                                    let segOrientation = 0;
                                    if(seg.isStart){
                                        this.ballContainer.innerHTML += `<a-gltf-model src="#Ball_blue" 
                                        position="${segX+1.5} ${y+5} ${segZ-1.5}" 
                                        scale="1 1 1"
                                        dynamic-body="shape: box; mass: 0.5;"></a-gltf-model>`
                                    }
                                    switch(seg.orientation){
                                        case 0:
                                        break;
                                        case 1:
                                            segOrientation = -90;
                                            segZ = z + (i-1)*3;
                                        break;
                                        case 2:
                                            segOrientation = -180;
                                            segX = x + (j+1)*3;
                                            segZ = z + (i-1)*3;
                                        break;
                                        case 3:
                                            segOrientation = 90;
                                            segX = x + (j+1)*3;
                                        break;
                                    }
                                    this.courseContainer.innerHTML += `<a-gltf-model src="#${seg.name}" 
                                        position="${segX} ${y} ${segZ}" 
                                        scale="1 1 1"
                                        rotation ="0 ${segOrientation} 0" 
                                        static-body="shape: box;"></a-gltf-model>`
                                }
                                j++;
                            }
                        }
                        i++;
                    }
                    x+=30;
                }
            }
        })
        
    }

}
