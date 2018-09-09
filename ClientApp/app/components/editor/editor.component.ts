import { Component } from '@angular/core';
import { Course, Hole, Segment } from '../../model';

@Component({
    selector: 'editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css']
})
export class EditorComponent {

    public course: Course = new Course();

    public courseToLoad: string | undefined;

    public currentHole: Hole | undefined;
    public currentSeg: Segment | undefined;

    public isSegSelection: boolean = false;

    public availableSegments: string[] = [
        'Walls_to_open',
        'T_split',
        'Straight',
        'Split_walls_to_open',
        'Split_start',
        'Split',
        'Side',
        'Round_corner_3',
        'Round_corner_1',
        'Ramp_square',
        'Ramp_sharp',
        'Open',
        'Obstacle_triangle',
        'Obstacle_diamond',
        'Obstacle_block',
        'Narrow_square',
        'Narrow_round',
        'Hole_open',
        'Hill_square',
        'Gap',
        'Bump_walls',
        'Bump_down_walls',
        'Bump_down',
        'Bump'
    ]
    
    constructor(){

    }

    public removeSeg(segment: Segment): void{
        segment.altitude = 0;
        segment.name = '';
        segment.orientation = 0;
    }
    public rotateSeg(segment: Segment): void{
        segment.orientation = ((segment.orientation + 1) % 4);

    }
    public changeSeg(segment: Segment): void{
        this.isSegSelection = true;
        this.currentSeg = segment;
    }
    public selectSeg(name: string): void{
        if(this.currentSeg){
            this.currentSeg.name = name;
        }
        this.isSegSelection = false;
        this.currentSeg = undefined;
    }

    public setStart(segment: Segment){
        if(this.currentHole){
            for(let segTab of this.currentHole.segments){
                let seg = segTab.find(s=>s.isStart == true);
                if(seg){
                    seg.isStart = false;
                }
            }
        }
        segment.isStart = true;
    }

    public getCSSRotation(segment: Segment): string{
        return 'rotate(' + (90 * segment.orientation) + 'deg)';
    }

    public loadCourse(){
        if(this.courseToLoad){
            this.course = JSON.parse(this.courseToLoad);
        }
    }

}
