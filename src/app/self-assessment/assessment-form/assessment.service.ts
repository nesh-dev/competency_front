import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { AuthService } from '../..//services/auth/auth.service';
import { environment } from 'src/environments/environment';
import { UserInfo } from "../../interfaces/user";



@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  private PendingAssessmentStatusSubject: BehaviorSubject<UserInfo>
  public PendingAssessmentStatus: Observable<UserInfo>
  

  constructor(private http: HttpClient,private authService: AuthService) 
  
  { 
    this.PendingAssessmentStatusSubject = new BehaviorSubject<UserInfo>(null)
    this.PendingAssessmentStatus = this.PendingAssessmentStatusSubject.asObservable()
    
  }

  public Competencies():Observable<any> {
    console.log("gotcalled")
    return this
      .http
      .get<any>(`${environment.BASE_URL}/competency/list/`)

      
    
  }
  public CompetencyStrands(competencyId):Observable<any> {
    
    
    return this
      .http
      .get<any>(`${environment.BASE_URL}/competency/${competencyId}/list/`)
      
    
  }


  public postAssessment(assessment: any) {return this.http.post(`${environment.BASE_URL}/assessments/list/`, assessment)}
}
  
