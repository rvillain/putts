import { Component, OnInit } from '@angular/core';

declare var  AFRAME: any;

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    public container: any;
    public colors: any;
    public score: number = 0;
    public pars: number[] = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    public scores: number[] = [];
    public currentHole = 1;

    constructor(){
        
    }

    ngOnInit(): void {
        this.container = document.querySelector("#container");
        this.colors = ["red", "orange", "yellow", "green", "blue", "purple", "hotpink"];
        this.startGame();
    }

    startGame(){
        this.scores = [0];
        this.score = 0;
        this.currentHole = 1;
        this.addBall(1);
        this.updateScoreText();
    }

    ballIn(){
        if(this.currentHole == 18){

        }
        else{
            this.currentHole++;
            this.scores.push(0);
            this.updateScoreText();
        }
    }

    ballHit(){
        this.scores[this.currentHole - 1] ++;
        this.score ++;
        this.updateScoreText();
    }
    
    updateScoreText(){
        let scoreEl: any = document.getElementById('score');
        scoreEl.setAttribute('value', 'Score: ' + this.score);
    }

    addBall(hole:number) {
        let x = 2.5;
        let y = 5;
        let z = -2.3;
        this.container.innerHTML += `<a-gltf-model src="#ball" 
            position="${x} ${y} ${z}" 
            gltf-model="/models/ball.gltf"
            scale="0.05 0.05 0.05"
            dynamic-body="shape: box; mass: 0.5;"></a-gltf-model>`
    }
}
