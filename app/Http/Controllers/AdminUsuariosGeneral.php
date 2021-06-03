<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\RegionModel;
use App\ComunaModel;
use App\EmpresaModel;
use App\UsuarioModel;
use Auth;
use DB;
class AdminUsuariosGeneral extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

     /**
     * index
     * Permite crear usuarios desde un perfil de empresa
     * @group AdminUsuario
     */
    public function index(){
        $val = EmpresaModel::infoEmpresaId(Auth::user()->id);
        
        if($val == 0)
        {
           $nombre = "";
           $rut = "";
           $region = 0;
           $comuna = 0;
           $dir = "";
           $tel = "";
        }
        else{
                
                $nombre = $val[0];
                $rut = $val[1];
                $region = $val[2] ;
                $comuna = $val[3];
                $tel = $val[4];
                $dir = $val[5];
        }
        return view('admin_usuarios')
        ->with('regiones', RegionModel::all())
        ->with('comunas', ComunaModel::all())
        ->with('nombre', $nombre)
        ->with('rut', $rut)
        ->with('region', $region)
        ->with('comuna', $comuna)
        ->with('dir', $dir)
        ->with('tel', $tel);                
    }
    public function agregarempresa(Request $request)
    {
        $idemp = EmpresaModel::obtenerEmpresaNew($request["rutemp"]);
        if($idemp == 0)
        {
          $insert = new EmpresaModel;
          $insert->rut_empresa = strtoupper($request["rutemp"]);
          $insert->nombre_empresa = strtoupper($request["nombreemp"]);
          $insert->fono_empresa = $request["fonoemp"];
          $insert->id_comuna_empresa = $request["comuna"];
          $insert->id_region_empresa = $request["region"];
          $insert->direccion_empresa = $request["diremp"];
          $insert->save();
          if($insert->id > 0)
          {
            DB::table('users')
            ->update(['empresa' => strtoupper($request["nombreemp"])]);
            return json_encode(array("id"=> $insert->id, "status" => "ok"));
          }
          else
          {
            return json_encode(array("id"=> 0, "status" => "error1"));
          }
          
        }
        else
        {
            $arreglo = array("rut_empresa" => '"'.strtoupper($request["rutemp"]).'"', "nombre_empresa" => '"'.$request["nombreemp"].'"', "fono_empresa" => $request["fonoemp"], "id_comuna_empresa" => $request["comuna"], "id_region_empresa" => $request["region"], "direccion_empresa" => $request["diremp"]);
            DB::table('empresa_origen')
            ->where("id_empresa", $idemp)
            ->update(["rut_empresa" => strtoupper($request["rutemp"]), "nombre_empresa" => strtoupper($request["nombreemp"]), "fono_empresa" => $request["fonoemp"], "id_comuna_empresa" => $request["comuna"], "id_region_empresa" => $request["region"], "direccion_empresa" => $request["diremp"]]);
            DB::table('users')
            ->update(['empresa' => strtoupper($request["nombreemp"])]);
            return json_encode(array("id"=> 1, "status" => "ok"));
        }
        
    }

    public function obtenerUsuariosEmpresa()
    {
        $val = UsuarioModel::infoUserEmpId(Auth::user()->id);
        return json_encode(array("datos"=> $val, "id" => Auth::user()->id, "status" => "ok"));
    }
}


