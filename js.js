AFRAME.registerComponent("balls",{
    init:function(){
        this.ballsmake()
    },
    ballsmake : function(){
        window.addEventListener("keydown",e=>{
            if(e.key === "z"){
                var balls = document.createElement("a-entity")

                balls.setAttribute("material","color","black")
                balls.setAttribute("geometery",{
                    primitive:"sphere",
                    radius:"1"
                })

                var pos = camera.getAttribute("positon")

                balls.setAttribute("position",{
                    x:pos.x,
                    y:pos.y,
                    z:pos.z
                })

                var camera = document.querySelector("#camera").object3D

                var direction = new THREE.Vector3()

                balls.setAttribute("velocity",{
                    x:0,
                    y:0,
                    z:-1
                })

                var scene = document.querySelector("#scene")

                scene.appendChild(balls)
            }
        })
    }
})