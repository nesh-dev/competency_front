import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssessmentService } from '../assessment.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';


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
  currentUser: any = null;
  isSelfAssessment: boolean;
  assessmentFormGroup: FormGroup;
  assessment: any;
  errorAfterSubmission: boolean
  pendingAssessmentStatus: any

  opened = true;

  constructor(private route: ActivatedRoute, private router: Router, private assessmentService: AssessmentService) { }

  ngOnInit() {
    this.isSelfAssessment = false;
    this.errorAfterSubmission = false
    this.initializeForm();
  }

  submit() {
    this.errorAfterSubmission = this.assessmentFormGroup.invalid
    this.prepareAssessment()

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

  prepareAssessment() {
    this.assessment = {
      user_id: this.currentUser.id,
      results: [
        {
          competency: {
            id: 1,
            strands: [
              {
                id: 1,
                rating_id: Number(this.assessmentFormGroup.value.organisation.planning),
                comment: this.assessmentFormGroup.value.organisation.planningComment
              },
              {
                id: 2,
                rating_id: Number(this.assessmentFormGroup.value.organisation.execution),
                comment: this.assessmentFormGroup.value.organisation.executionComment
              },
              {
                id: 3,
                rating_id: Number(this.assessmentFormGroup.value.organisation.prioritization),
                comment: this.assessmentFormGroup.value.organisation.prioritizationComment
              }
            ]
          }
        },
        {
          competency: {
            id: 2,
            strands: [
              {
                id: 4,
                rating_id: Number(this.assessmentFormGroup.value.innovation.innovation),
                comment: this.assessmentFormGroup.value.innovation.innovationComment
              },
              {
                id: 5,
                rating_id: Number(this.assessmentFormGroup.value.innovation.thinkingOutsideTheBox),
                comment: this.assessmentFormGroup.value.innovation.thinkingOutsideTheBoxComment
              },
              {
                id: 6,
                rating_id: Number(this.assessmentFormGroup.value.innovation.adaptability),
                comment: this.assessmentFormGroup.value.innovation.adaptabilityComment
              }
            ]
          }
        },
        {
          competency: {
            id: 3,
            strands: [
              {
                id: 7,
                rating_id: Number(this.assessmentFormGroup.value.interpersonalCommunication.investmentBuilding),
                comment: this.assessmentFormGroup.value.interpersonalCommunication.investmentBuildingComment
              },
              {
                id: 8,
                rating_id: Number(this.assessmentFormGroup.value.interpersonalCommunication.effectiveCommunication),
                comment: this.assessmentFormGroup.value.interpersonalCommunication.effectiveCommunicationComment
              },
              {
                id: 9,
                rating_id: Number(this.assessmentFormGroup.value.interpersonalCommunication.deliveringTheMessage),
                comment: this.assessmentFormGroup.value.interpersonalCommunication.deliveringTheMessageComment
              }
            ]
          }
        },
        {
          competency: {
            id: 4,
            strands: [
              {
                id: 10,
                rating_id: Number(this.assessmentFormGroup.value.criticalThinking.dataCompilation),
                comment: this.assessmentFormGroup.value.criticalThinking.dataCompilationComment
              },
              {
                id: 11,
                rating_id: Number(this.assessmentFormGroup.value.criticalThinking.dataAnalysis),
                comment: this.assessmentFormGroup.value.criticalThinking.dataAnalysisComment
              },
              {
                id: 12,
                rating_id: Number(this.assessmentFormGroup.value.criticalThinking.problemSolving),
                comment: this.assessmentFormGroup.value.criticalThinking.problemSolvingComment
              },
              {
                id: 13,
                rating_id: Number(this.assessmentFormGroup.value.criticalThinking.continualImprovement),
                comment: this.assessmentFormGroup.value.criticalThinking.continualImprovementComment
              }
            ]
          }
        },
        {
          competency: {
            id: 5,
            strands: [
              {
                id: 14,
                rating_id: Number(this.assessmentFormGroup.value.buildingAndManagingRelationships.teamwork),
                comment: this.assessmentFormGroup.value.buildingAndManagingRelationships.teamworkComment
              },
              {
                id: 15,
                rating_id: Number(this.assessmentFormGroup.value.buildingAndManagingRelationships.stakeholderManagement),
                comment: this.assessmentFormGroup.value.buildingAndManagingRelationships.stakeholderManagementComment
              },
              {
                id: 16,
                rating_id: Number(this.assessmentFormGroup.value.buildingAndManagingRelationships.conflictManagement),
                comment: this.assessmentFormGroup.value.buildingAndManagingRelationships.conflictManagementComment
              }
            ]
          }
        }
      ]
    };
    
  }
}
  
