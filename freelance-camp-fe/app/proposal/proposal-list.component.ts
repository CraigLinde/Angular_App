
import { Component } from '@angular/core';
import { Proposal } from './proposal';


@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'ABC Company', 'https://CraigLinde.com', 'Ruby On Rails', 150,120,15)
  proposalTwo: Proposal = new Proposal(99, 'XYZ Company', 'https://CraigLinde.com', 'Ruby On Rails', 150,120,15)
  proposalThree: Proposal = new Proposal(300, 'PDQ Company', 'https://CraigLinde.com', 'Ruby On Rails', 150,120,15)

  proposals: Proposal[] = [
  this.proposalOne, 
  this.proposalTwo, 
  this.proposalThree
  ]

}