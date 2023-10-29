import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, UntypedFormBuilder, Validator, FormControl } from '@angular/forms';
import { ApiServices } from 'src/app/services/api-services.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.scss']
})
export class NewSaleComponent implements OnInit {

    form:any;
    loading: boolean = false;
    spinnerName:string;
    spinnerType:string;
    radioValue = 'A';
    demoValue:any = 1;
    quantity:any = 0;
    checked:boolean = false;
    checkOptionsOne = [
        { label: 'Extra Cheez', value: 'Apple', checked: true },
        { label: 'Extra Topping', value: 'Pear' },
    ];

    product:any = {
        type: [
            {
                name: 'Soft Drinks',
                variant: [
                    {
                        name: 'Glass',
                        size: [
                            {
                                name: '300ml',
                                flavor: [
                                    {label: "Lemon Malt", quantity: 0, checked: false, price: 100},
                                    {label: "Peach Malt", quantity: 0, checked: false, price: 100},
                                    {label: "Malt 79", quantity: 0, checked: false, price: 100},
                                ]
                            },
                            {
                                name: '500ml',
                                flavor: [
                                    {label: "Lemon Malt", quantity: 0, checked: false, price: 100},
                                    {label: "Peach Malt", quantity: 0, checked: false, price: 100},
                                    {label: "Malt 79", quantity: 0, checked: false, price: 100},
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Plastic',
                        size: [
                            {
                                name: '300ml',
                                flavor: [
                                    {label: "Big Apple", quantity: 0, checked: false, price: 100},
                                    {label: "Big Lychee", quantity: 0, checked: false, price: 100},
                                    {label: "Big Anar", quantity: 0, checked: false, price: 100},
                                    {label: "Big Peach", quantity: 0, checked: false, price: 100},
                                ] 
                            },
                            {
                                name: '500ml',
                                flavor: [
                                    {label: "Big Apple", quantity: 0, checked: false, price: 100},
                                    {label: "Big Lychee", quantity: 0, checked: false, price: 100},
                                    {label: "Big Anar", quantity: 0, checked: false, price: 100},
                                    {label: "Big Peach", quantity: 0, checked: false, price: 100},
                                ] 
                            },
                            {
                                name: '1500ml',
                                flavor: [
                                    {label: "Big Apple", quantity: 0, checked: false, price: 100},
                                    {label: "Big Lychee", quantity: 0, checked: false, price: 100},
                                    {label: "Big Anar", quantity: 0, checked: false, price: 100},
                                    {label: "Big Peach", quantity: 0, checked: false, price: 100},
                                ] 
                            }
                        ]
                    },
                    {
                        name: 'Tinpack',
                        size: [
                            {
                                name: '330ml',
                                flavor: [
                                    {label: "Lemon Malt", quantity: 0, checked: false, price: 100},
                                    {label: "Peach Malt", quantity: 0, checked: false, price: 100},
                                    {label: "Malt 79", quantity: 0, checked: false, price: 100},
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Water'
            },
            {
                name: 'Juices'
            }
        ]
    }

    products:any = [
        {
            name: 'Soft Drinks',
            type: [
                {
                    name: 'Glass',
                    variant: [
                        {
                            name: 'Glass 300ml',
                            flavors: [
                                {label: "Lemon Malt", quantity: 0, checked: false, price: 100},
                                {label: "Peach Malt", quantity: 0, checked: false, price: 100},
                                {label: "Malt 79", quantity: 0, checked: false, price: 100},
                            ] 
                        },
                        {
                            name: 'Glass 500ml',
                            flavors: [
                                {label: "Lemon Malt", quantity: 0, checked: false, price: 100},
                                {label: "Peach Malt", quantity: 0, checked: false, price: 100},
                                {label: "Malt 79", quantity: 0, checked: false, price: 100},
                            ] 
                        }
                    ]
                },
                {
                    name: 'Plastic',
                    type: [
                        {
                            name: 'Plastic 300ml',
                            flavors: [
                                {label: "Big Apple", quantity: 0, checked: false, price: 100},
                                {label: "Big Lychee", quantity: 0, checked: false, price: 100},
                                {label: "Big Anar", quantity: 0, checked: false, price: 100},
                                {label: "Big Peach", quantity: 0, checked: false, price: 100},
                            ] 
                        },
                        {
                            name: 'Plastic 500ml',
                            flavors: [
                                {label: "Big Apple", quantity: 0, checked: false, price: 100},
                                {label: "Big Lychee", quantity: 0, checked: false, price: 100},
                                {label: "Big Anar", quantity: 0, checked: false, price: 100},
                                {label: "Big Peach", quantity: 0, checked: false, price: 100},
                            ] 
                        },
                        {
                            name: 'Plastic 1500ml',
                            flavors: [
                                {label: "Big Apple", quantity: 0, checked: false, price: 100},
                                {label: "Big Lychee", quantity: 0, checked: false, price: 100},
                                {label: "Big Anar", quantity: 0, checked: false, price: 100},
                                {label: "Big Peach", quantity: 0, checked: false, price: 100},
                            ] 
                        }
                    ]
                },
                {
                    name: 'Tinpack',
                    type: [
                        {
                            name: 'Tin 330ml',
                            flavors: [
                                {label: "Lemon Malt", quantity: 0, checked: false, price: 100},
                                {label: "Peach Malt", quantity: 0, checked: false, price: 100},
                                {label: "Malt 79", quantity: 0, checked: false, price: 100},
                            ] 
                        }
                    ]
                }
            ] 
        },
        {
            name: 'Water'
        },
        {
            name: 'Juices'
        }
    ]

    constructor(
        private formBuilder: UntypedFormBuilder,
         private apiService: ApiServices,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService

        ) { 
                this.spinnerName='sp1';
        this.spinnerType='line-scale';
    }

    ngOnInit(): void {
        this.loadAllProducts();
    }

    pizza:any = [
        {
        size: "Small", 
        description: "This is a description of small pizza",
        flavors: [
            {label: "Chicken Tikka", quantity: 0, checked: false, price: 100},
            {label: "Chicken Supreme", quantity: 0, checked: false, price: 100},
            {label: "Ice'n Spice Special", quantity: 0, checked: false, price: 100},
            {label: "Chef's Special", quantity: 0, checked: false, price: 100},
            {label: "Multi Flavor", quantity: 0, checked: false, price: 100},
            {label: "Malai Boti", quantity: 0, checked: false, price: 100},
            {label: "Kababian", quantity: 0, checked: false, price: 100},
            {label: "Punjabian", quantity: 0, checked: false, price: 100},
            {label: "BBQ", quantity: 0, checked: false, price: 100}
        ]
        },
        {
        size: "Medium", 
        description: "This is a description of medium pizza",
        flavors: [
            {label: "Chicken Tikka", quantity: 0, checked: false, price: 100},
            {label: "Chicken Supreme", quantity: 0, checked: false, price: 100},
            {label: "Ice'n Spice Special", quantity: 0, checked: false, price: 100},
            {label: "Chef's Special", quantity: 0, checked: false, price: 100},
            {label: "Multi Flavor", quantity: 0, checked: false, price: 100},
            {label: "Malai Boti", quantity: 0, checked: false, price: 100},
            {label: "Kababian", quantity: 0, checked: false, price: 100},
            {label: "Punjabian", quantity: 0, checked: false, price: 100},
            {label: "BBQ", quantity: 0, checked: false, price: 100}
        ]
        },
        {
        size: "Large", 
        description: "This is a description of large pizza",
        flavors: [
            {label: "Chicken Tikka", quantity: 0, checked: false, price: 100},
            {label: "Chicken Supreme", quantity: 0, checked: false, price: 100},
            {label: "Ice'n Spice Special", quantity: 0, checked: false, price: 100},
            {label: "Chef's Special", quantity: 0, checked: false, price: 100},
            {label: "Multi Flavor", quantity: 0, checked: false, price: 100},
            {label: "Malai Boti", quantity: 0, checked: false, price: 100},
            {label: "Kababian", quantity: 0, checked: false, price: 100},
            {label: "Punjabian", quantity: 0, checked: false, price: 100},
            {label: "BBQ", quantity: 0, checked: false, price: 100}
        ]
        },
        {
        size: "Family", 
        description: "This is a description of family pizza",
        flavors: [
            {label: "Chicken Tikka", quantity: 0, checked: false, price: 100},
            {label: "Chicken Supreme", quantity: 0, checked: false, price: 100},
            {label: "Ice'n Spice Special", quantity: 0, checked: false, price: 100},
            {label: "Chef's Special", quantity: 0, checked: false, price: 100},
            {label: "Multi Flavor", quantity: 0, checked: false, price: 100},
            {label: "Malai Boti", quantity: 0, checked: false, price: 100},
            {label: "Kababian", quantity: 0, checked: false, price: 100},
            {label: "Punjabian", quantity: 0, checked: false, price: 100},
            {label: "BBQ", quantity: 0, checked: false, price: 100}
        ]
        },
    ];

    // placeOrder() {
    //     this.loading = true;
    // }

    submit() {
        console.log(this.order)
    }

    order:any = [];
    saveOrderData(tIndex:any, vIndex:any, sIndex:any, fIndex:any, checkbox:any) {
        console.log(checkbox)
        if(this.product.type[tIndex].variant[vIndex].size[sIndex].flavor[fIndex].checked && checkbox) {
            if(this.product.type[tIndex].variant[vIndex].size[sIndex].flavor[fIndex].quantity < 1) {
                this.product.type[tIndex].variant[vIndex].size[sIndex].flavor[fIndex].quantity = 1;
            }
        } else if(!this.product.type[tIndex].variant[vIndex].size[sIndex].flavor[fIndex].checked && checkbox) {
            this.product.type[tIndex].variant[vIndex].size[sIndex].flavor[fIndex].quantity = 0;
        }

        if(this.product.type[tIndex].variant[vIndex].size[sIndex].flavor[fIndex].checked && checkbox) {
            console.log('adding order')
            this.order.push({
                company_name: 'Muree Brewery',
                type: this.product.type[tIndex].name,
                variant: this.product.type[tIndex].variant[vIndex].name,
                size: this.product.type[tIndex].variant[vIndex].size[sIndex].name,
                flavor: this.product.type[tIndex].variant[vIndex].size[sIndex].flavor[fIndex].label,
                quantity: this.product.type[tIndex].variant[vIndex].size[sIndex].flavor[fIndex].quantity,
                price: this.product.type[tIndex].variant[vIndex].size[sIndex].flavor[fIndex].price,
            })
        } else if(this.product.type[tIndex].variant[vIndex].size[sIndex].flavor[fIndex].checked && !checkbox) {
            for(let x = 0; x<this.order.length; x++) {
                if(this.order[x].size === this.product.type[tIndex].variant[vIndex].size[sIndex].name && this.order[x].flavor === this.product.type[tIndex].variant[vIndex].size[sIndex].flavor[fIndex].label) {
                    this.order[x].quantity = this.product.type[tIndex].variant[vIndex].size[sIndex].flavor[fIndex].quantity;
                }
            }
        } else {
            for(let x = 0; x<this.order.length; x++) {
                if(this.order[x].size === this.product.type[tIndex].variant[vIndex].size[sIndex].name && this.order[x].flavor === this.product.type[tIndex].variant[vIndex].size[sIndex].flavor[fIndex].label) {
                    this.order.splice(x, 1);
                }
            }
        }
    }

    placeOrder() {
        this.spinner.show(this.spinnerName);
        this.apiService.addSale(this.order).subscribe((response:any) => {
            console.log(response);
            this.toastr.success('New Sale is Added');
            this.spinner.hide(this.spinnerName);
        }, error => {
            this.toastr.error('Item is Already Added');
            this.spinner.hide(this.spinnerName);
            console.log(error)
        })
    }

    allProducts:any = [];
    loadAllProducts() {
        this.apiService.loadAllProducts().subscribe((response:any) => {
            console.log(response)
            this.allProducts = response;
            let data = this.allProducts;

            // data.filter()
            const type = [... new Set(data.map((x:any) => x.type))]
            console.log(type)

            const variant = [... new Set(data.map((x:any) => x.variant))]
            console.log(variant)

            const size = [... new Set(data.map((x:any) => x.size))]
            console.log(size)
        }, error => {

            console.log(error)
        })
    }
}
