/*
Vector3 wraps a vector of length 3, often used as a position in 3D space.

Taken from https://github.com/googlevr/webvr-polyfill/blob/master/src/math-util.js which took it from Three.js
*/
export default class Vector3 {
	constructor(x=0, y=0, z=0){
		this.x = x
		this.y = y
		this.z = z
	}

	set(x, y, z){
		this.x = x
		this.y = y
		this.z = z
		return this
	}

	copy(v){
		this.x = v.x
		this.y = v.y
		this.z = v.z
		return this
	}

	length(){
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
	}

	normalize(){
		var scalar = this.length()
		if (scalar !== 0){
			this.multiplyScalar(1 / scalar)
		} else {
			this.x = 0
			this.y = 0
			this.z = 0
		}
		return this
	}

	multiplyScalar(scalar){
		this.x *= scalar
		this.y *= scalar
		this.z *= scalar
	}

	applyQuaternion(q){
		const x = this.x
		const y = this.y
		const z = this.z

		const qx = q.x
		const qy = q.y
		const qz = q.z
		const qw = q.w

		// calculate quat * vector
		const ix =  qw * x + qy * z - qz * y
		const iy =  qw * y + qz * x - qx * z
		const iz =  qw * z + qx * y - qy * x
		const iw = - qx * x - qy * y - qz * z

		// calculate result * inverse quat
		this.x = ix * qw + iw * - qx + iy * - qz - iz * - qy
		this.y = iy * qw + iw * - qy + iz * - qx - ix * - qz
		this.z = iz * qw + iw * - qz + ix * - qy - iy * - qx

		return this
	}

	applyMatrix4(matrix){
		const x = this.x
		const y = this.y
		const z = this.z
		const w = 1 / (matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15])
		this.x = (matrix[0] * x + matrix[4] * y + matrix[8]  * z + matrix[12]) * w
		this.y = (matrix[1] * x + matrix[5] * y + matrix[9]  * z + matrix[13]) * w
		this.z = (matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14]) * w
		return this
	}

	dot(v){
		return this.x * v.x + this.y * v.y + this.z * v.z
	}

	crossVectors(a, b){
		const ax = a.x, ay = a.y, az = a.z
		const bx = b.x, by = b.y, bz = b.z
		this.x = ay * bz - az * by
		this.y = az * bx - ax * bz
		this.z = ax * by - ay * bx
		return this
	}
}
