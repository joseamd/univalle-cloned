{"filter":false,"title":"demo.js","tooltip":"/univalle/media/administrador/plugins/jQuery/demo.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":19,"column":17},"end":{"row":19,"column":18},"action":"remove","lines":["a"],"id":181}],[{"start":{"row":19,"column":16},"end":{"row":19,"column":17},"action":"remove","lines":["c"],"id":182}],[{"start":{"row":19,"column":16},"end":{"row":19,"column":17},"action":"insert","lines":["u"],"id":183}],[{"start":{"row":19,"column":17},"end":{"row":19,"column":18},"action":"insert","lines":["s"],"id":184}],[{"start":{"row":19,"column":18},"end":{"row":19,"column":19},"action":"insert","lines":["c"],"id":185}],[{"start":{"row":19,"column":18},"end":{"row":19,"column":19},"action":"remove","lines":["c"],"id":186}],[{"start":{"row":19,"column":17},"end":{"row":19,"column":18},"action":"remove","lines":["s"],"id":187}],[{"start":{"row":19,"column":16},"end":{"row":19,"column":17},"action":"remove","lines":["u"],"id":188}],[{"start":{"row":19,"column":16},"end":{"row":19,"column":17},"action":"insert","lines":["s"],"id":189}],[{"start":{"row":19,"column":17},"end":{"row":19,"column":18},"action":"insert","lines":["u"],"id":190}],[{"start":{"row":19,"column":18},"end":{"row":19,"column":19},"action":"insert","lines":["c"],"id":191}],[{"start":{"row":19,"column":16},"end":{"row":19,"column":19},"action":"remove","lines":["suc"],"id":192},{"start":{"row":19,"column":16},"end":{"row":19,"column":23},"action":"insert","lines":["success"]}],[{"start":{"row":17,"column":0},"end":{"row":18,"column":0},"action":"remove","lines":["",""],"id":193}],[{"start":{"row":17,"column":0},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":194}],[{"start":{"row":16,"column":11},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":195},{"start":{"row":17,"column":0},"end":{"row":17,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":18,"column":0},"end":{"row":19,"column":0},"action":"remove","lines":["",""],"id":196}],[{"start":{"row":13,"column":0},"end":{"row":13,"column":6},"action":"remove","lines":["\t\t    "],"id":197}],[{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "],"id":198}],[{"start":{"row":13,"column":4},"end":{"row":13,"column":8},"action":"insert","lines":["    "],"id":199}],[{"start":{"row":13,"column":8},"end":{"row":13,"column":12},"action":"insert","lines":["    "],"id":200}],[{"start":{"row":22,"column":0},"end":{"row":22,"column":4},"action":"insert","lines":["    "],"id":201},{"start":{"row":23,"column":0},"end":{"row":23,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":22,"column":64},"end":{"row":22,"column":65},"action":"remove","lines":[" "],"id":202}],[{"start":{"row":22,"column":63},"end":{"row":22,"column":64},"action":"remove","lines":[":"],"id":203}],[{"start":{"row":24,"column":0},"end":{"row":24,"column":4},"action":"insert","lines":["    "],"id":204},{"start":{"row":25,"column":0},"end":{"row":25,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":26,"column":5},"end":{"row":26,"column":9},"action":"insert","lines":["    "],"id":205}],[{"start":{"row":27,"column":6},"end":{"row":27,"column":10},"action":"insert","lines":["    "],"id":206}],[{"start":{"row":29,"column":16},"end":{"row":29,"column":20},"action":"insert","lines":["    "],"id":207}],[{"start":{"row":26,"column":0},"end":{"row":26,"column":9},"action":"remove","lines":["\t\t\t\t\t    "],"id":208}],[{"start":{"row":26,"column":0},"end":{"row":26,"column":4},"action":"insert","lines":["    "],"id":209}],[{"start":{"row":26,"column":4},"end":{"row":26,"column":8},"action":"insert","lines":["    "],"id":210}],[{"start":{"row":26,"column":8},"end":{"row":26,"column":12},"action":"insert","lines":["    "],"id":211}],[{"start":{"row":26,"column":12},"end":{"row":26,"column":16},"action":"insert","lines":["    "],"id":212}],[{"start":{"row":26,"column":16},"end":{"row":26,"column":20},"action":"insert","lines":["    "],"id":213}],[{"start":{"row":26,"column":20},"end":{"row":26,"column":24},"action":"insert","lines":["    "],"id":214}],[{"start":{"row":32,"column":0},"end":{"row":33,"column":0},"action":"remove","lines":["",""],"id":215}],[{"start":{"row":31,"column":11},"end":{"row":31,"column":12},"action":"remove","lines":[" "],"id":216}],[{"start":{"row":31,"column":10},"end":{"row":31,"column":11},"action":"remove","lines":[" "],"id":217}],[{"start":{"row":31,"column":9},"end":{"row":31,"column":10},"action":"remove","lines":[" "],"id":218}],[{"start":{"row":31,"column":8},"end":{"row":31,"column":9},"action":"remove","lines":[" "],"id":219}],[{"start":{"row":28,"column":5},"end":{"row":28,"column":9},"action":"insert","lines":["    "],"id":220}],[{"start":{"row":0,"column":0},"end":{"row":35,"column":4},"action":"remove","lines":["// Autor: @jqcaper","// Configuraciones Generales","var nombre_tabla = \"#demo-dt-delete\"; // id","var nombre_boton_eliminar = \".delete\"; // Clase","var nombre_formulario_modal = \"#frmEliminar\"; //id","var nombre_ventana_modal = \"#myModal\"; // id","// Fin de configuraciones","","","    $(document).on('ready',function(){","        $(nombre_boton_eliminar).on('click',function(e){","            e.preventDefault();","            var id = $(this).attr('id')","            var name = $(this).attr('name')","            $('#modal_idProducto').val(id);","            $('#modal_name').text(name);","        });","        ","        var options = {","                success:function(result)","                {","                    if(result){","                        $.notify('Se elimino satisfactoriamente',\"success\");","                        var elementos= $(\"demo-dt-delete\"+' >tbody >tr').length;","                        if(elementos==1){","                                location.reload();","                        }else{","\t\t\t\t\t\t    $('#tr'+id).remove();","\t\t\t\t\t    }","                    }","                }","        };","        $(nombre_formulario_modal).ajaxForm(options);","    });","    ","    "],"id":221}],[{"start":{"row":0,"column":0},"end":{"row":40,"column":7},"action":"insert","lines":["// Autor: @jqcaper","// Configuraciones Generales","var nombre_tabla = \"#tabla_productos\"; // id","var nombre_boton_eliminar = \".delete\"; // Clase","var nombre_formulario_modal = \"#frmEliminar\"; //id","var nombre_ventana_modal = \"#myModal\"; // id","// Fin de configuraciones","","","    $(document).on('ready',function(){","        $(nombre_boton_eliminar).on('click',function(e){","            e.preventDefault();","            var Pid = $(this).attr('id');","            var name = $(this).data('name');","            $('#modal_idProducto').val(Pid);","            $('#modal_name').text(name);","        });","","        var options = {","                success:function(response)","                {","                    if(response.status==\"True\"){","                        alert(\"Eliminado!\");","                        var idProd = response.product_id;","                        var elementos= $(nombre_tabla+' >tbody >tr').length;","                        if(elementos==1){","                                location.reload();","                        }else{","                            $('#tr'+idProd).remove();","                            $(nombre_ventana_modal).modal('hide');","                        }","                        ","                    }else{","                        alert(\"Hubo un error al eliminar!\");","                        $(nombre_ventana_modal).modal('hide');","                    };","                }","            };","","        $(nombre_formulario_modal).ajaxForm(options);","    });"],"id":222}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":36},"action":"remove","lines":["abla_productos"],"id":223}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"remove","lines":["t"],"id":224}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"insert","lines":["d"],"id":225}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["e"],"id":226}],[{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["m"],"id":227}],[{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"remove","lines":["m"],"id":228}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"remove","lines":["e"],"id":229}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"remove","lines":["d"],"id":230}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":35},"action":"insert","lines":["demo-dt-delete"],"id":231}],[{"start":{"row":17,"column":0},"end":{"row":18,"column":0},"action":"remove","lines":["",""],"id":232}],[{"start":{"row":16,"column":11},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":233},{"start":{"row":17,"column":0},"end":{"row":17,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":40,"column":7},"end":{"row":41,"column":0},"action":"insert","lines":["",""],"id":234},{"start":{"row":41,"column":0},"end":{"row":41,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":41,"column":4},"end":{"row":42,"column":0},"action":"insert","lines":["",""],"id":235},{"start":{"row":42,"column":0},"end":{"row":42,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":42,"column":4},"end":{"row":43,"column":0},"action":"insert","lines":["",""],"id":236},{"start":{"row":43,"column":0},"end":{"row":43,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":14,"column":26},"end":{"row":14,"column":32},"action":"remove","lines":["oducto"],"id":237},{"start":{"row":14,"column":26},"end":{"row":14,"column":27},"action":"insert","lines":["g"]}],[{"start":{"row":14,"column":27},"end":{"row":14,"column":28},"action":"insert","lines":["r"],"id":238}],[{"start":{"row":14,"column":28},"end":{"row":14,"column":29},"action":"insert","lines":["a"],"id":239}],[{"start":{"row":14,"column":29},"end":{"row":14,"column":30},"action":"insert","lines":["m"],"id":240}],[{"start":{"row":14,"column":30},"end":{"row":14,"column":31},"action":"insert","lines":["a"],"id":241}],[{"start":{"row":14,"column":26},"end":{"row":14,"column":27},"action":"insert","lines":["o"],"id":242}],[{"start":{"row":23,"column":33},"end":{"row":23,"column":34},"action":"remove","lines":["d"],"id":243}],[{"start":{"row":23,"column":33},"end":{"row":23,"column":34},"action":"insert","lines":["g"],"id":244}],[{"start":{"row":23,"column":34},"end":{"row":23,"column":35},"action":"insert","lines":["r"],"id":245}],[{"start":{"row":23,"column":35},"end":{"row":23,"column":36},"action":"insert","lines":["a"],"id":246}],[{"start":{"row":23,"column":36},"end":{"row":23,"column":37},"action":"insert","lines":["m"],"id":247}],[{"start":{"row":23,"column":37},"end":{"row":23,"column":38},"action":"insert","lines":["a"],"id":248}],[{"start":{"row":23,"column":56},"end":{"row":23,"column":57},"action":"remove","lines":["t"],"id":249}],[{"start":{"row":23,"column":55},"end":{"row":23,"column":56},"action":"remove","lines":["c"],"id":250}],[{"start":{"row":23,"column":54},"end":{"row":23,"column":55},"action":"remove","lines":["u"],"id":251}],[{"start":{"row":23,"column":53},"end":{"row":23,"column":54},"action":"remove","lines":["d"],"id":252}],[{"start":{"row":23,"column":53},"end":{"row":23,"column":54},"action":"insert","lines":["g"],"id":253}],[{"start":{"row":23,"column":54},"end":{"row":23,"column":55},"action":"insert","lines":["r"],"id":254}],[{"start":{"row":23,"column":55},"end":{"row":23,"column":56},"action":"insert","lines":["a"],"id":255}],[{"start":{"row":23,"column":56},"end":{"row":23,"column":57},"action":"insert","lines":["m"],"id":256}],[{"start":{"row":23,"column":57},"end":{"row":23,"column":58},"action":"insert","lines":["a"],"id":257}],[{"start":{"row":28,"column":41},"end":{"row":28,"column":42},"action":"remove","lines":["d"],"id":258}],[{"start":{"row":28,"column":41},"end":{"row":28,"column":42},"action":"insert","lines":["g"],"id":259}],[{"start":{"row":28,"column":42},"end":{"row":28,"column":43},"action":"insert","lines":["r"],"id":260}],[{"start":{"row":28,"column":43},"end":{"row":28,"column":44},"action":"insert","lines":["a"],"id":261}],[{"start":{"row":28,"column":44},"end":{"row":28,"column":45},"action":"insert","lines":["m"],"id":262}],[{"start":{"row":28,"column":45},"end":{"row":28,"column":46},"action":"insert","lines":["a"],"id":263}],[{"start":{"row":22,"column":23},"end":{"row":22,"column":29},"action":"remove","lines":[" alert"],"id":264}],[{"start":{"row":22,"column":23},"end":{"row":22,"column":24},"action":"insert","lines":[" "],"id":265}],[{"start":{"row":22,"column":24},"end":{"row":22,"column":52},"action":"insert","lines":["$.notify(mensaje,\"success\");"],"id":266}],[{"start":{"row":22,"column":53},"end":{"row":22,"column":65},"action":"remove","lines":["\"Eliminado!\""],"id":267}],[{"start":{"row":22,"column":33},"end":{"row":22,"column":40},"action":"remove","lines":["mensaje"],"id":268},{"start":{"row":22,"column":33},"end":{"row":22,"column":45},"action":"insert","lines":["\"Eliminado!\""]}],[{"start":{"row":22,"column":59},"end":{"row":22,"column":60},"action":"remove","lines":[";"],"id":269}],[{"start":{"row":22,"column":58},"end":{"row":22,"column":59},"action":"remove","lines":[")"],"id":270}],[{"start":{"row":22,"column":57},"end":{"row":22,"column":58},"action":"remove","lines":["("],"id":271}],[{"start":{"row":22,"column":43},"end":{"row":22,"column":44},"action":"insert","lines":[" "],"id":272}],[{"start":{"row":22,"column":44},"end":{"row":22,"column":45},"action":"insert","lines":["S"],"id":273}],[{"start":{"row":22,"column":45},"end":{"row":22,"column":46},"action":"insert","lines":["a"],"id":274}],[{"start":{"row":22,"column":44},"end":{"row":22,"column":46},"action":"remove","lines":["Sa"],"id":275},{"start":{"row":22,"column":44},"end":{"row":22,"column":57},"action":"insert","lines":["Satisfactoria"]}],[{"start":{"row":22,"column":57},"end":{"row":22,"column":58},"action":"insert","lines":["m"],"id":276}],[{"start":{"row":22,"column":58},"end":{"row":22,"column":59},"action":"insert","lines":["e"],"id":277}],[{"start":{"row":22,"column":59},"end":{"row":22,"column":60},"action":"insert","lines":["n"],"id":278}],[{"start":{"row":22,"column":60},"end":{"row":22,"column":61},"action":"insert","lines":["t"],"id":279}],[{"start":{"row":22,"column":61},"end":{"row":22,"column":62},"action":"insert","lines":["e"],"id":280}],[{"start":{"row":22,"column":62},"end":{"row":22,"column":63},"action":"insert","lines":["!"],"id":281}]]},"ace":{"folds":[],"scrolltop":145,"scrollleft":0,"selection":{"start":{"row":22,"column":63},"end":{"row":22,"column":63},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":251,"mode":"ace/mode/javascript"}},"timestamp":1478033975571,"hash":"158184be9a224309ff450caae6106c5175c39347"}