import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { AuthService } from '../../../services/auth/auth.service';
import { AssessmentService } from '../assessment.service';



@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.component.html',
  styleUrls: ['./assessment-form.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ]
})

export class AssessmentFormComponent implements OnInit { 
  currentUser: number ;
  isSelfAssessment: boolean;
  assessmentFormGroup: FormGroup;
  assessment: any;
  errorAfterSubmission: boolean
  pendingAssessmentStatus: any
  competencies:any

  opened = true;

  constructor(private route: ActivatedRoute,
    private router: Router, 
    private assessmentService: AssessmentService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    console.log("midnight")
    this.isSelfAssessment = false;
    this.errorAfterSubmission = false
    this.checkAssessmentType();
    this.initializeForm();
    this.getPendingAssessmentStatus()
    this.currentUser = this.authService.currentUserValue()
    this.getCompetencies();
  }

  getCompetencies():object {
    return this.assessmentService.Competencies()
  .subscribe((response)=>{console.log(response)},(error)=>{console.log(error)})
  }

  checkAssessmentType() {
    this.route.queryParamMap.subscribe((params: any) => {
      if (params.params.assessing)
        if (params.params.assessing === 'userid') {
          this.isSelfAssessment = true;
        
            (currentUser: any) => (this.currentUser = currentUser)   
        }
    });
  }

  getPendingAssessmentStatus() {
    this
      .assessmentService
      .PendingAssessmentStatus
      .subscribe(assessStatus => {
        if (assessStatus) {
          console.log(assessStatus)
          this.pendingAssessmentStatus = assessStatus
        }
      })
  }

  submit() {
    console.log(this.assessmentFormGroup.value);
    this.errorAfterSubmission = this.assessmentFormGroup.invalid
    this
      .assessmentService
      .postAssessment(this.assessment)
      .subscribe(
        (postAssessmentSuccessful: any) => {
          console.log({postAssessmentSuccessful})
          this.router.navigate(['dashboard'])
        }
      )
  }

  initializeForm() {
    this.assessmentFormGroup = new FormGroup({
      organisation: new FormGroup({
        planning: new FormControl(null, [Validators.required]),
        planningComment: new FormControl(null),
        execution: new FormControl(null, [Validators.required]),
        executionComment: new FormControl(null),
        prioritization: new FormControl(null, [Validators.required]),
        prioritizationComment: new FormControl(null)
      }),
      innovation: new FormGroup({
        innovation: new FormControl(null, [Validators.required]),
        innovationComment: new FormControl(null),
        thinkingOutsideTheBox: new FormControl(null, [Validators.required]),
        thinkingOutsideTheBoxComment: new FormControl(null),
        adaptability: new FormControl(null, [Validators.required]),
        adaptabilityComment: new FormControl(null)
      }),
      interpersonalCommunication: new FormGroup({
        investmentBuilding: new FormControl(null, [Validators.required]),
        investmentBuildingComment: new FormControl(null),
        effectiveCommunication: new FormControl(null, [Validators.required]),
        effectiveCommunicationComment: new FormControl(null),
        deliveringTheMessage: new FormControl(null, [Validators.required]),
        deliveringTheMessageComment: new FormControl(null)
      }),
      criticalThinking: new FormGroup({
        dataCompilation: new FormControl(null, [Validators.required]),
        dataCompilationComment: new FormControl(null),
        dataAnalysis: new FormControl(null, [Validators.required]),
        dataAnalysisComment: new FormControl(null),
        problemSolving: new FormControl(null, [Validators.required]),
        problemSolvingComment: new FormControl(null),
        continualImprovement: new FormControl(null, [Validators.required]),
        continualImprovementComment: new FormControl(null)
      }),
      buildingAndManagingRelationships: new FormGroup({
        teamwork: new FormControl(null, [Validators.required]),
        teamworkComment: new FormControl(null),
        stakeholderManagement: new FormControl(null, [Validators.required]),
        stakeholderManagementComment: new FormControl(null),
        conflictManagement: new FormControl(null, [Validators.required]),
        conflictManagementComment: new FormControl(null)
      })
    });
  }

}
  
