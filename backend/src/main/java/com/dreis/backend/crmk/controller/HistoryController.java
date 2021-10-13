package com.dreis.backend.crmk.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dreis.backend.crmk.model.History;
import com.dreis.backend.crmk.repository.HistoryRepository;

import javassist.compiler.ast.Variable;

@RestController
@RequestMapping("/api")
public class HistoryController {
	
	@Autowired
	private HistoryRepository historyRepository;
	
	@GetMapping("/getAll")
	public List<History> listar() {
		return historyRepository.findAll();
	}
	
	@PostMapping("/save")
	@ResponseStatus
	public History add( @RequestBody History history) {
		return historyRepository.save(history);
	}
	
	public History salvares(Integer num, Integer resulty) {
		History history = History.builder()
				.num(num)
				.resulty(resulty)
				.build();
		return historyRepository.save(history);
	}
	
	
	@PostMapping("/calc")
	public History calc( @RequestBody History history) {
		Integer num = history.getNum();
		Integer mult = 1;
		Integer tmp = 0;
		
		while (true) {
			mult += 1;
			tmp = num * mult;
			if (verificarSeEhDuo(tmp)) {
				History his = salvares(num, tmp);
				return his;
			}
        }
	}
	
	private boolean verificarSeEhDuo(Integer num) {
		String tmp = num.toString();
		Integer tam = tmp.length();
		
		List<String> lista_numeros = new ArrayList();
		
		for(int i = 0; i <= (tam-1); ++i){
			String numero_atual = tmp.substring(i, i+1);
			if (!(lista_numeros.contains(numero_atual))) {
				lista_numeros.add(tmp.substring(i, i+1));
			}
		};
		
		if(lista_numeros.size() > 0 &&  lista_numeros.size() < 3){
			return true; 
			}
		else {
			return false;				
			}
		}
}
